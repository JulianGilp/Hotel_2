'use strict';
const {
  Model
} = require('sequelize');
const Reservas = require('./reservas');
module.exports = (sequelize, DataTypes) => {
  class Huespedes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Huespedes.hasMany(models.Reservas,{foreignKey: 'habitacion_id'}); 
    }
  }
  Huespedes.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Huespedes',
    tableName: 'huespedes',
  });
  return Huespedes;
};