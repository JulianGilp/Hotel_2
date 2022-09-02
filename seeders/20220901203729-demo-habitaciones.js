'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('habitaciones', [{
      precio_por_noche: 50000, 
      piso: 3,
      max_personas: 5,
      tiene_cama_bebe: "si",
      tiene_ducha: "Si",
      tiene_bano: "Si",
      tiene_balcon: "si",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('habitaciones', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
