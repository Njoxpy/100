const express = require("express");
require("dotenv").config();
const cors = require("cors");
// create new instance
const app = express();
const PORT = 5000;
// ST
app.use(express.json());
app.use(cors());
// ROUTES
const authRoutes = require("./routes/auth.routes");

// TEST
/*
app.get("/", (req, res) => {
  res.status(200).json({ message: "Working!" });
}); */

app.get("/", (req, res) => {
  res.render("home");
});

app.use(authRoutes);

// SET VIEW ENGINE.
app.set("view engine", "ejs");

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(PORT, () => {
  console.log(`Listening at: ${PORT}`);
});

// http://localhost:5000/auth/google/redirect
