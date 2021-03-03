const express = require("express");
const router = express.Router();
const redirectLogin = require("../middleware.js").redirectLogin;

router.get("/", redirectLogin, (req, res) => {
  res.redirect("/homepage");
});

module.exports = router;
