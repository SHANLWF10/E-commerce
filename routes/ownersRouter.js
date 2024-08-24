const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");
router.get("/", (req, res) => {
  res.send("Hey!, It's owner");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", (req, res) => {
    res.send("Working fine");
  });
}

module.exports = router;
