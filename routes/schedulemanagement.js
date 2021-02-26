const express = require('express')
const router = express.Router()
const db = require('../db/database')

// router.get('/schedulemanagement', (req, res) => {
//   res.render('pages/schedulemanagement/:schedule_id')
// })

router.get('/:schedule_id', (req, res) => {
  db.any('SELECT * FROM schedules WHERE schedule_id = $1', [req.params.schedule_id])
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

router.get('/', (req, res) => {

})

// TODO POST route 

router.post('/', (req, res) => {

  
  let id_user = req.body.id_user
  let day = req.body.day
  let start_time = req.body.start_time
  let end_time = req.body.end_time

  db.none('INSERT INTO schedules(id_user, day, start_time, end_time) VALUES ($1, $2, $3, $4);', [id_user, day, start_time, end_time])
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