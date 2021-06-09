const { Router } = require("express");
const router = Router();

const users = require("../sample.json");

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
