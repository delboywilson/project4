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
// TODO put redirectHomepage back in
router.get('/', (req, res) => {

  db.any('SELECT * from schedules;')
    .then((schedule) => {
      console.log(schedule)
      res.render('pages/homepage', {
        schedule: schedule
      })
    })
    .catch((err) => {
      //console.error(err)
      res.render('pages/error', {
        err: err,
        title: "Error | Mr. Coffee"
      })
    })
  })

module.exports = router