const express = require('express')
const router = express.Router()
const db = require('../db/database')

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id]).then((user) => {
    res.render('pages/employeepage', { user })
  })
  .catch((err) => {
        res.render("pages / error", {
            err: err,
            title: "Error | Mr.Coffee"
    })
  }
)})

module.exports = router