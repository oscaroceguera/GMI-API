var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || 'development'
var db_name = process.env.DB_NAME || undefined
var db_username = process.env.DB_USERNAME || undefined
var db_pass = process.env.DB_PASS || undefined

if (env === 'production') {
  sequelize = new Sequelize(db_name, db_username, db_pass, {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  })
} else {
  sequelize = new Sequelize(db_name, db_username, db_pass, {
    dialect: 'sqlite',
    storage: __dirname + '/data/dev-gmi-api.sqlite'
  })
}

var db = {}

db.registry = sequelize.import(__dirname + '/models/registry.js')

db.sequelize = sequelize
db.Sequelize = sequelize

module.exports = db
