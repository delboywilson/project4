const express = require('express')
const path = require('path')
const db = require('./database')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressLayouts)


app.get("/something", (req,res) => {
  res.send("Hello there, I am Ahmad!")
})

app.listen(PORT, () => {
  console.log(`server is listening on localhost${PORT}`)
})