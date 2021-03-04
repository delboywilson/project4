const express = require("express");
const router = express.Router();
const db = require("../db/database");
const bcrypt = require("bcrypt");
const redirectHomepage = require("../middleware.js").redirectHomepage;

// router.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//     res.clearCookie("user_sid");
//   }
//   next();
// });

router.get("/", redirectHomepage, (req, res) => {
  console.log(req.session);
  res.render("pages/login");
});

router.post("/", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const login = {
    email: email,
    password: password,
  };
  console.log(login);

  // query db for email & password
  // compare login with stored data
  db.query("SELECT * FROM users WHERE email = $1;", [email])
    .then((results) => {
      const match = results[0];
      console.log(match);
      bcrypt.compare(password, match.password, function (err, result) {
        console.log(result);
        console.log(err);
        if (!result) {
          res.render("pages/login");
        } else {
          req.session.userID = match.user_id;
          console.log(req.session.userID);
          res.redirect("/homepage");
        }
      });
    })
    .catch(function (err) {
      if (err.message === "Cannot read property 'password' of undefined") {
        res.render("pages/error", {
          err: {
            message: "email or password not found",
          },
        });
      } else {
        res.render("pages/error", {
          err: err,
        });
      }
    });
});

module.exports = router;
