var db = require('../db')
var Registries = require('../controllers/registries')

module.exports = function (app) {
  app
    .get('/', function (req, res) { res.send('API - GMI Registry') })
    .post('/registries', Registries.addRegisty)
    .get('/registries', Registries.fetchRegisty)
}
