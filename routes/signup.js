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

  let last_name = req.body.last_name;
  let first_name = req.body.first_name;
  let email = req.body.email;
  let password = bcrypt.hashSync(req.body.password, 10);

  // TODO need to add more validation here
  // TODO cookie is not being created for signup

  db.query("SELECT * FROM users WHERE email = $1;", [email])
    .then((results) => {
      console.log(results);
      if (results !== null) {
        db.any(
          "INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4);",
          [last_name, first_name, email, password]
        ).then(() => {
          db.query("SELECT * FROM users WHERE email = $1;", [email]).then(
            (results) => {
              const newID = results[0];
              console.log(newID.user_id);
              const sessID = newID.user_id;
              req.session.userID = sessID;
              res.redirect("/homepage");
            }
          );
        });
      } else {
        return res.render("pages/error", {
          err: {
            message: "email already exists",
          },
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.render("pages/error", {
        err: err,
      });
    });
});

module.exports = router;

// db.query("SELECT * FROM users WHERE email = $1;", [email])
//     .then((results) => {
//       const match = results[0];
//       console.log(match);
//       bcrypt.compare(password, match.password, function (err, result) {
//         console.log(result);
//         console.log(err);
//         if (!result) {
//           db.any(
//             "INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4);",
//             [last_name, first_name, email, password]
//           ).then(() => {
//             db.query("SELECT * FROM users WHERE email = $1;", [email]).then(
//               (results) => {
//                 const newID = results[0];
//                 console.log(newID.user_id);
//                 req.session.userID = newID.user_id;
//               }
//             );
//             res.redirect("/homepage");
//           });
//         } else
//           res.render("pages/error", {
//             err: err,
//           });
//       });
//     })
