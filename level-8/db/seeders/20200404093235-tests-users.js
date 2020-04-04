'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Stephanie',
      gender: 'F',
      birthDate: new Date('1995', '05', '01'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Antoine',
      gender: 'M',
      birthDate: new Date('1993', '09', '01'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Charlie',
      gender: 'M',
      birthDate: new Date('2000', '07', '12'),
      birthDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Jane',
      gender: 'F',
      birthDate: new Date('1992', '01', '10'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Juliette',
      gender: 'F',
      birthDate: new Date('1989', '12', '12'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Jacob',
      gender: 'M',
      birthDate: new Date('1985', '03', '24'),
      birthDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
