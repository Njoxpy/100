const express = require("express");
const db = require("./DB");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "working" });
});

app.listen(3000, () => {
  console.log(`Listening at: ${3000}`);
  db();
});
