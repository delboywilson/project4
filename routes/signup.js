const express = require("express");
const path = require("path");
const db = require("../db/database");
const router = express.Router();
const bcrypt = require("bcrypt");
const redirectHomepage = require("../middleware.js").redirectHomepage;

router.get("/", redirectHomepage, (req, res) => {
  const { userID } = req.session;

  res.render("pages/signup");
});

router.post("/", (req, res) => {
  const { userID } = req.session;

  let v1 = req.body.last_name;
  let v2 = req.body.first_name;
  let v3 = req.body.email;
  let v4 = bcrypt.hashSync(req.body.password, 10);

  // TODO need to add more validation here
  // TODO cookie is not being created for signup

  db.none(
    "INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4);",
    [v1, v2, v3, v4]
  )
    .then(() => {
      db.query("SELECT * FROM users WHERE email = $1;", [v3]).then(
        (results) => {
          const newID = results[0];
          console.log(newID.user_id);
          req.session.userID = newID.user_id;
        }
      );
      res.redirect("/homepage");
    })
    .catch((err) => {
      console.error(err);
      res.render("pages/error", {
        err: err,
      });
    });
});

module.exports = router;
