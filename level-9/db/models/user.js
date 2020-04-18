'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    gender: DataTypes.STRING(1),
    birthDate: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    models.User.belongsTo(models.Country, {
      targetKey: 'id',
      foreignKey: 'country_id'
    });
    models.User.hasMany(models.Visit, {
      as: 'visits',
      foreignKey: 'user_id',
      sourceKey: 'id'
    });
  };
  return User;
};