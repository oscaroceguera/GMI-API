var http = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var server = http.createServer(app)
var db = require('./db')
var router = require('./routes')

var PORT = process.env.PORT || 3000

var corsOptions

if (PORT === 3000) {
  corsOptions = {
    origin: 'http://localhost:8080'
  }
} else {
  corsOptions = {
    origin: 'http://inoquotech.com'
  }
}

app.use(cors(corsOptions))
app.use(bodyParser.json({ type: '*/*'}))

router(app)

db.sequelize.sync(
  // { force: true }
).then(function(){
  server.listen(PORT, function () {
    console.log('✔ Express corriendo en puerto ' + PORT)
  })
})
