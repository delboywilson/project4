const express = require('express')
const router = express.Router()
const db = require('../db/database')

// router.get('/', (req, res) => {
//   res.render('pages/homepage')
// })

router.get('/', (req, res) => {
  db.any('SELECT * from schedules;')
    .then((schedule) => {
      console.log(schedule)
      res.render('pages/homepage', {
        mySchedule: schedule
      })
    })
    .catch((err) => {
      console.error(err)
      res.render('pages/error', {
        err: err
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