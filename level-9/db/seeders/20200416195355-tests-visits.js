'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log("SEEDER VISITS", users);

    const usersPromise = queryInterface.sequelize.query(`SELECT id, name from Users;`
    )
      .then(users => users[0].reduce((accumulator, item) => {
          console.log("usersPromise");
          accumulator[item.name] = item.id;
          return accumulator;
        }, {})
      )

    const countriesPromise = queryInterface.sequelize.query(`SELECT id, name from Countries;`
    )
      .then(countries => countries[0].reduce((accumulator, item) => {
          console.log("countriesPromise");
          accumulator[item.name] = item.id;
          return accumulator;
        }, {})
      )

    return Promise.all([usersPromise, countriesPromise])
      .then(([users, coutries]) => {
        console.log("users:", users);
        console.log("coutries:", coutries);

        return queryInterface.bulkInsert('Visits', [
        {
          visit_date: new Date('2018', '09', '01'),
          user_id: users[Stephanie],
          country_id: countries[France],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          visit_date: new Date('2019', '10', '12'),
          user_id: users[Stephanie],
          country_id: countries[Belgium],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          visit_date: new Date('2020', '02', '20'),
          user_id: users[Stephanie],
          country_id: countries[Netherlands],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          visit_date: new Date('2017', '05', '01'),
          user_id: users[Antoine],
          country_id: countries[Germany],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          visit_date: new Date('2020', '02', '20'),
          user_id: users[Antoine],
          country_id: countries[Netherlands],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          visit_date: new Date('2012', '07', '12'),
          user_id: users[Charlie],
          country_id: countries[France],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          visit_date: new Date('2015', '03', '22'),
          user_id: users[Charlie],
          country_id: countries[Jacob],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Visits', null, {});
  }
};
