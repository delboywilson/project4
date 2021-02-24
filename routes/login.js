const express = require('express')
const router = express.Router()
const crypto = require('crypto')
var session = require('express-session')

router.get('/', (req, res) => {
  res.render('pages/login')
})

router.post('/login', (req, res) => {
  const hashSymbols = crypto.createHash('sha256').update(req.body.password).digest('hex')
  const newSchedule = {
    email: req.body.email,
    password: hashSymbols
  }
  // TODO work on password db
  db.schedules.push(newSchedule)
  res.redirect('/homepage')
})

<<<<<<< HEAD
=======


>>>>>>> aa73c8c97348f7ef929c7598236032625f1ad81c
module.exports = router
