var db = require('../db')
var json2csv = require('json2csv')

const fields = ['uuid', 'firstName', 'lastName', 'title', 'organization', 'position', 'email', 'work', 'mobile', 'country', 'state', 'town', 'line', 'address', 'meetingPreviously', 'delegateList', 'firstGenomeSequencing', 'createdAt'];
const fieldNames = ['ID', 'FIRST NAME', 'LAST NAME', 'TITLE', 'ORGANIZATION', 'POSITION', 'EMAIL', 'WORK', 'MOBILE', 'COUNTRY', 'STATE', 'TOWN', 'LINE 1', 'ADDRESS', 'MEETING PREVIOUSLY', 'DELEGATE LIST', 'FIRST GMI', 'REGISTRY DAY'];

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

exports.fetchRegistyCsv = function (req, res) {
  db.registry
    .findAll()
    .then(function (registries) {
      var data = json2csv({ data: registries, fields: fields, fieldNames: fieldNames })
      res.attachment('registro_gmi.csv')
      res.status(200).send(data)
    }).catch(function () {
      res.status(401).send()
    })
}
