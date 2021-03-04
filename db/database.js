const pgp = require("pg-promise")();

const connectionDetails = require('/Users/braedanbolt/desktop/dev/project4/config.js') 

const db = pgp(connectionDetails);

module.exports = db;
