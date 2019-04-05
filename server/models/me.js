'use strict';
module.exports = (sequelize, DataTypes) => {
  const me = sequelize.define('me', {
    name: DataTypes.STRING
  }, {});
  me.associate = function(models) {
    // associations can be defined here
    me.hasMany(models.you,{
      references:{
        foreignKey:'id',
        as :'mes'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })
  };
  return me;
};
``
