'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Visits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      visit_date: {
        type: Sequelize.DATE
      },
      user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
      country_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Countries',
        key: 'id'
      }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Visits');
  }
};