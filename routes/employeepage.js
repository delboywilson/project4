const express = require('express')
const router = express.Router()
const db = require('../db/database')

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