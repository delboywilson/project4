const express = require('express')
const router = express.Router()
const db = require('../db/database')

const redirectLogin = (req, res, next) => {
  if (!req.session.userID) {
    res.redirect('/login')
  } else {
    next()
  }
}
// TODO put redirectLogin back in
router.get('/:user_id', (req, res) => {
  db.query('SELECT * FROM users WHERE user_id = $1', [req.params.user_id])
  .then((user) => {
    res.render('pages/employeepage', { 
      user: user 
    })
  })
  .catch((err) => {
        res.render("pages/error", {
            err: err,
            title: "Error | Mr.Coffee"
    })
  }
)})

module.exports = router