'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Address,{through:'useradd',foreignKey:'userid',
     })
    Address.belongsToMany(models.User,{through:'useradd', foreignKey:'addressid'})
   };
  return User;
};
