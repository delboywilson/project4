const express = require('express')
const router = express.Router()
const db = require('../db/database')
const bcrypt = require('bcrypt')
const session = require('express-session')

router.get('/', (req, res) => {
  res.render('pages/login')
})

router.post('/', (req, res) => {
  
  const password = req.body.password
  const email = req.body.email
  const login = {
      email: email,
      password: password,
    }
    console.log(login)
    // query db for email & password
    // compare login with stored data using?:

    db.query('SELECT * FROM users WHERE email = $1;', [email]) 
    .then((results) => {
      const match = results[0]
      console.log(match)
      bcrypt.compare(password, match.password, function(err, result) {
        console.log(result)
        console.log(err)
        if (!result) {
          res.render('pages/login')
        }
        else {
          res.redirect('/homepage')
        }
      })
    })
    .catch(function(err) {
      if (err.message === "Cannot read property 'password' of undefined") {
        res.render('pages/error', {
          err: {
            message: 'email or password not found'
          }
        })
      } else {
        res.render('pages/error', {
        err: err
      })
    }
    })
    
    
})

    

module.exports = router
