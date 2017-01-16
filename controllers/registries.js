var db = require('../db')

exports.addRegisty = function (req, res) {
  var body = req.body

  db.registry
    .create(body)
    .then(function (registry) {
      res.json(registry.toJSON())
    }, function (e) {
      res.status(400).json(e)
    })
}

exports.fetchRegisty = function (req, res) {
  db.registry
    .findAll()
    .then(function (registries) {
      res.json(registries)
    }).catch(function () {
      res.status(401).send()
    })
}
