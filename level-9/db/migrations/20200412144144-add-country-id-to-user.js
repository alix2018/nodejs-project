'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'country_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Countries', // name of Target model
        key: 'id', // key in Target model that we're referencing
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColum('Users', 'country_id');
  }
};
