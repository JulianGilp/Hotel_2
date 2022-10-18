'use strict';
const {
  Model
} = require('sequelize');
const Habitaciones = require('./habitaciones');
const Huespedes = require('./huespedes');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservas.belongsTo(models.Habitaciones, {foreignKey: 'habitacion_id'});
      Reservas.belongsTo(models.Huespedes, {foreignKey: 'huesped_id'});
    }
  }
  Reservas.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    inicio_fecha: DataTypes.DATE,
    fin_fecha: DataTypes.DATE,
    habitacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'habitaciones', key: 'id' },
    },
    huesped_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'huespedes', key: 'id' },
    },
  }, {
    sequelize,
    modelName: 'Reservas',
    tableName: 'reservas',
  });
  return Reservas;
};