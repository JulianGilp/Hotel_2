'use strict';

    module.exports = {
      async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('huespedes', [{
          nombres: "andres felipe", 
          apellidos: "munoz patino",
          telefono: "3023387538",
          correo: "andres.munozpa@campusucc.edu.co",
          direccion: "pandiguando",
          ciudad: "Popayan",
          Pais: "Colombia",
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      },
    
      async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('huespedes', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
      }
    };
