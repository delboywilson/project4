const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const redirectLogin = (req, res, next) => {
  if (!req.session.userID) {
    res.redirect("/login");
  } else {
    next();
  }
};

router.get("/", redirectLogin, (req, res) => {
  res.redirect("/homepage");
});

module.exports = router;
