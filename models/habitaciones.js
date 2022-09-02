'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habitaciones.init({
    precio_por_noche: DataTypes.INTEGER,
    piso: DataTypes.INTEGER,
    max_personas: DataTypes.STRING,
    tiene_cama_bebe: DataTypes.STRING,
    tiene_ducha: DataTypes.STRING,
    tiene_bano: DataTypes.STRING,
    tiene_balcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Habitaciones',
  });
  return Habitaciones;
};


