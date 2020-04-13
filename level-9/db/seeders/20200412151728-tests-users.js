'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`SELECT id, name from Countries;`
    )
    .then(
      countries => countries[0].reduce((accumulator, item) => {
        accumulator[item.name] = item.id;
        return accumulator;
      }, {})
    )
      .then(country_keys => {
        return queryInterface.bulkInsert('Users', [{
        username: 'Stephanie',
        gender: 'F',
        birthDate: new Date('1995', '05', '01'),
        country_id: country_keys.Netherlands,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Antoine',
        gender: 'M',
        country_id: country_keys.Germany,
        birthDate: new Date('1993', '09', '01'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Charlie',
        gender: 'M',
        birthDate: new Date('2000', '07', '12'),
        country_id: country_keys['Czech Republic'],
        birthDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Jane',
        gender: 'F',
        country_id: country_keys.Spain,
        birthDate: new Date('1992', '01', '10'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Juliette',
        gender: 'F',
        country_id: country_keys.France,
        birthDate: new Date('1989', '12', '12'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Claire',
        gender: 'F',
        country_id: country_keys.France,
        birthDate: new Date('1992', '11', '11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Jacob',
        gender: 'M',
        birthDate: new Date('1985', '03', '24'),
        country_id: country_keys.Belgium,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};