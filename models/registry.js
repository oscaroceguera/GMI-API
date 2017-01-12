var uuid = require('uuid')

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('registry', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuid.v1()
      },
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
