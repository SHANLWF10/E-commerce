const express = require("express");
const router = express.Router();
// const path = require("path");

router.get("/", (req, res) => {
  res.send("Hey!, It's owner");
});

module.exports = router;
