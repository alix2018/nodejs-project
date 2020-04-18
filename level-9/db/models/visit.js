'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visit = sequelize.define('Visit', {
    visit_date: DataTypes.DATE
  }, {});
  Visit.associate = function(models) {
    models.Visit.belongsTo(models.User, {
      targetKey: 'id',
      foreignKey: 'user_id'
    });
    models.Visit.belongsTo(models.Country, {
      targetKey: 'id',
      foreignKey: 'country_id'
    });
  };
  return Visit;
};