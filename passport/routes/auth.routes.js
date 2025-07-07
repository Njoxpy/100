const express = require("express");
const authRoutes = express.Router();

authRoutes.get("/auth", (req, res) => {
  res.status(200).json({ message: "auth routes" });
});

// LOGIN
authRoutes.get("/login", (req, res) => {
  res.render("login");
});

authRoutes.get("/logout", (req, res) => {
  res.send("logging out");
});
authRoutes.get("/google", (req, res) => {
  res.send("logging with google");
});

module.exports = authRoutes;
