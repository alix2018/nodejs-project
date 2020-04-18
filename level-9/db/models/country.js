'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    models.Country.hasMany(models.User, {
      as: 'users',
      foreignKey: 'country_id',
      sourceKey: 'id'
    });
    models.Country.hasMany(models.Visit, {
      as: 'visits',
      foreignKey: 'country_id',
      sourceKey: 'id'
    });
  };
  return Country;
};