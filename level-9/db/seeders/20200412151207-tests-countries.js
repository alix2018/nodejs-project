'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [{
      name: 'France',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Netherlands',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Germany',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Belgium',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Czech Republic',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Spain',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});

  }
};
