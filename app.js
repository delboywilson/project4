const express = require('express')
const path = require('path')
const db = require('./db/database')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const User = require('./models/user')
const app = express()
const PORT = 3000
// this was crashing nodemon as we need the module 
// require('dotenv').config()

const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const homepageRouter = require('./routes/homepage')

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
app.use('/homepage', homepageRouter)


app.listen(PORT, () => {
  console.log(`server is listening on localhost${PORT}`)
})