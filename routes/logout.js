const express = require('express')
const router = express.Router()

const redirectLogin = (req, res, next) => {
  if (!req.session.userID) {
    res.redirect('/login')
  } else {
    next()
  }
}

router.post('/', redirectLogin, (req, res) => {
  req.session.destroy()
  res.redirect('/login')
})

module.exports = router