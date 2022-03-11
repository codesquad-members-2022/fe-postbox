const express = require("express");
const app = express();
const port = 3000;
const sizeData = require("./data/size.json");

app.use(express.static("public"));
app.get("/size", (req, res) => {
  res.send(sizeData);
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
