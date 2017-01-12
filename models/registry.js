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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    work: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    town: {
      type: DataTypes.STRING,
      allowNull: false
    },
    line: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meetingPreviously: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    delegateList: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    firstGenomeSequencing: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  })
}
