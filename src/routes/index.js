const { Router } = require("express");
const router = Router();

// routes
router.get("/", (req, res) => {
  const data = {
    name: "frank",
  };
  res.json(data);
});

module.exports = router;
