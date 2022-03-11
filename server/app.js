const express = require("express");
const app = express();
const data = require("./data.js");

app.use(express.static(__dirname + "/../client"));
app.use("/data", data);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../client/index.html");
});

app.listen(3000);
