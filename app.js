const express = require('express')
const path = require('path')
const db = require('./db/database')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const PORT = 3000
require('dotenv').config()

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(expressLayouts)

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)

app.get('/homepage', (req, res) => {
  res.render('pages/homepage')
})

//Routers
// app.get('/', (req, res) => {
//   res.render('pages/login')
// })

// app.get('/signup', (req, res) => {
//   res.render('pages/signup')
// })

// app.get('/login', (req, res) => {
//   res.render('pages/login')
// })

// app.post('/users', (req, res) => {
//   const hashSymbols = crypto.createHash('sha256').update(req.body.password).digest('hex')
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: hashSymbols
//   }
//   db.users.push(newUser)
//   res.redirect('/users')
// })

// app.post('/schedules', (req, res) => {
//   const newSchedule = {
//     user_id: Number(req.body.user_id),
//     day: Number(req.body.day),
//     start_at: req.body.start_at,
//     end_at: req.body.end_at
//   }
//   db.schedules.push(newSchedule)
//   res.redirect('/schedules')
// })

app.listen(PORT, () => {
  console.log(`server is listening on localhost${PORT}`)
})