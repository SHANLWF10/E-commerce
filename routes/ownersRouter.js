const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey!, It's owner");
});

module.exports = router;
