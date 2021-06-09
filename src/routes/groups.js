const { Router } = require("express");
const router = Router();

const groups = require("../groups.json");

router.get("/", (req, res) => {
  res.json(groups);
});

module.exports = router;
