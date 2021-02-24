const express = require('express')
const router = express.Router()
const db = require('../db/database')

// router.get('/', (req, res) => {
//   res.render('pages/homepage')
// })

router.get('/', (req, res) => {
  db.any('SELECT * FROM schedules;')
    .then((schedules) => {
      //console.log(schedules)
      res.render('pages/homepage', {
        schedules: schedules
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

// router.post('/login', (req, res) => {
//   const hashSymbols = crypto.createHash('sha256').update(req.body.password).digest('hex')
//   const newSchedule = {
//     email: req.body.email,
//     password: hashSymbols
//   }
//   // TODO work on password db
//   db.schedules.push(newSchedule)
//   res.redirect('/homepage')
// })

module.exports = router