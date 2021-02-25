const express = require('express')
const router = express.Router()
const crypto = require('crypto')

router.get('/', (req, res) => {
  res.redirect('/login')
})

module.exports = router