const express = require("express");
const router = express.Router();
const db = require("../db/database");
const redirectLogin = require("../middleware.js").redirectLogin;

// this will show the details only for the logged in user, regardless of which name they click, which is ok, as they shouldn't
// access another user's page, but can be solved better
router.get("/:user_id", redirectLogin, (req, res) => {
  db.any(
    `SELECT user_id, last_name, first_name, email, id_user, day, start_time, end_time FROM users INNER JOIN schedules ON user_id = id_user WHERE user_id = ${req.session.userID};`
  )
    .then((user) => {
      console.log(user);
      res.render("pages/employeePage", {
        user: user,
      });
    })
    .catch((err) => {
      res.render("pages/error", {
        err: err,
        title: "Error | Mr.Coffee",
      });
    });
});

module.exports = router;
