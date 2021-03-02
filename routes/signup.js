const express = require('express')
const path = require('path')
const db = require('../db/database')
const router = express.Router()
const bcrypt = require('bcrypt')


// router.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//     res.clearCookie('user_sid')
//   }
//   next()
// })

// let sessionChecker = (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     res.redirect('pages/homepage')
//   } else {
//     next()
//   }
// }

const redirectHomepage = (req, res, next) => {
  if (!req.session.userID) {
    res.redirect('/homepage')
  } else {
    next()
  }
}
// TODO add redirectHomepage back
router.get('/', (req, res) => {
  res.render('pages/signup')
})

router.post('/', (req, res) => {

// TODO client side verification here

let v1 = req.body.last_name
let v2 = req.body.first_name
let v3 = req.body.email
let v4 = bcrypt.hashSync(req.body.password, 10)

// TODO need to check first if email exists and don't add if they do

db.none('INSERT INTO users(last_name, first_name, email, password) VALUES ($1, $2, $3, $4);', [v1, v2, v3, v4])
 .then(() => {
    res.redirect('/homepage')
  })
  .catch((err) => {
    console.error(err)
    res.render('pages/error', {
      err: err
    })
  })
 })

module.exports = router
