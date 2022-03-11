import express from "express";
import path from "path";
import { TownManager } from "./TownManager.js";

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.listen(PORT, () => {
  console.log(`✅ listening on http://localhost:${PORT}/`);
});

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.get("/towns", (req, res) => {
  const manager = new TownManager();
  manager.makeTowns();
  manager.setNames();

  res.json(manager.getTowns());
});
