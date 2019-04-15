'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.movie,{
      foreignKey:'user_id',
      as:'movies',
    })
  };
  return user;
};
