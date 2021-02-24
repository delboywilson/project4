const pgp = require('pg-promise')()

const connectionDetails = require('/Users/Delboy/prac/incode2/project4/config.js') 

const db = pgp(connectionDetails)

module.exports = db
