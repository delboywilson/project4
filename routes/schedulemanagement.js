const express = require('express')
const router = express.Router()
const db = require('../db/database')

const redirectLogin = (req, res, next) => {
  if (!req.session.userID) {
    res.redirect('/login')
  } else {
    next()
  }
}

// router.get('/schedulemanagement', (req, res) => {
//   res.render('pages/schedulemanagement/:schedule_id')
// })

// TODO put redirectLogin back in
router.get('/', (req, res) => {
  db.any(`SELECT user_id, last_name, first_name, id_user, day, start_time, end_time FROM users INNER JOIN schedules ON user_id = id_user WHERE user_id = ${req.session.userID};`)
    .then((schedule) => {
      console.log(req.session.userID)
      console.log(schedule)
      res.render('pages/schedulemanagement', {
        schedule: schedule
      })
    })
    .catch((err) => {
      console.error(err)
      res.render('pages/error', {
        err: err,
        title: "Error | Mr. Coffee"
      })
    })
  })

// router.get('/', (req, res) => {

// })

// TODO POST route 

router.post('/', (req, res) => {

  
  let id_user = req.body.id_user
  let day = req.body.day
  let start_time = req.body.start_time
  let end_time = req.body.end_time

  db.any('INSERT INTO schedules(id_user, day, start_time, end_time) VALUES ($1, $2, $3, $4);', [id_user, day, start_time, end_time])
  .then((schedule) => {
    console.log(schedule)
    res.redirect('schedulemanagement')
  })
  .catch((err) => {
    res.render("pages/error", {
        err: err,
        title: "Error | Mr.Coffee"
})
})
})

module.exports = router