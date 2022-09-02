'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('habitaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precio_por_noche: {
        type: Sequelize.INTEGER
      },
      piso: {
        type: Sequelize.INTEGER
      },
      max_personas: {
        type: Sequelize.STRING
      },
      tiene_cama_bebe: {
        type: Sequelize.STRING
      },
      tiene_ducha: {
        type: Sequelize.STRING
      },
      tiene_bano: {
        type: Sequelize.STRING
      },
      tiene_balcon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('habitaciones');
  }
};