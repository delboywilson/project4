const express = require('express')
const router = express.Router()
const db = require('../db/database')

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
          title: 'Error | Mr. Coffee'
        })
      })
  })

module.exports = router