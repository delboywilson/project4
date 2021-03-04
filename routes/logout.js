const express = require("express");
const router = express.Router();
const redirectLogin = require("../middleware.js").redirectLogin;

router.post("/", redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie("user_sid");
  res.redirect("/login");
});

module.exports = router;
