'use strict';
module.exports = (sequelize, DataTypes) => {
  const you = sequelize.define('you', {
    name: DataTypes.STRING
  }, {});
  you.associate = function(models) {
    // associations can be defined here
    you.belongsTo(models.me)
  };
  return you;
};
