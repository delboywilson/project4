const express = require("express");
const router = express.Router();
const redirectLogin = require("../middleware.js").redirectLogin;

router.post("/", redirectLogin, (req, res) => {
  res.clearCookie("user_sid");
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
