const express = require('express')
const router = express.Router()
const db = require('../db/database')

router.get('/', (req, res) => {
  db.any('SELECT * from schedules;')
    .then((schedule) => {
      console.log(schedule)
      res.render('pages/schedulemanagement', {
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

// TODO POST route 

router.post('/', (req, res) => {

  
  let user_name = req.body.user_name
  let day = req.body.day
  let start_time = req.body.start_time
  let end_time = req.body.end_time

  db.none('INSERT INTO schedules(user_name, day, start_time, end_time) VALUES ($1, $2, $3, $4);', [user_name, day, start_time, end_time])
  .then((newSchedule) => {
    console.log(newSchedule)
    res.render('pages/schedulemanagement', {
      newSchedule: newSchedule
    })
  })
  .catch((err) => {
    res.render("pages/error", {
        err: err,
        title: "Error | Mr.Coffee"
})
})
})

module.exports = router