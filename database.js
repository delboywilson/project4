const pgp = require('pg-promise')()

const connection = 'postgress://Delboy@localhost:5432/project4'

const db = pgp(connection)

module.exports = db