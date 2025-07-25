const express = require("express");

const DB = require("./config/db");

// test endpoint
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.listen(3000, () => {
  console.log(`Listening at: ${3000}`);
  DB();
});
