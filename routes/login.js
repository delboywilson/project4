const express = require('express')
const router = express.Router()
const crypto = require('crypto')

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

module.exports = router
