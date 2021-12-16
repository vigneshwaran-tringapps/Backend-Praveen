'use strict';
const {
  Model
} = require('sequelize');
const {Sequelize} = require ("../models")
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trip.init({
  TripNo: {
  type:DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey:true,
  allowNull:false 
  },
FromLocation:{
type:DataTypes.STRING,
allowNull:false,
},
ToLocation:{
type:DataTypes.STRING,
allowNull:true,
},
Date:{
type:DataTypes.DATEONLY,
allowNull:false,
defaultValue: sequelize.NOW
},

createdAt: {
  allowNull: false,
  type: DataTypes.DATE
},
updatedAt: {
  allowNull: false,
  type: DataTypes.DATE
}

  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};