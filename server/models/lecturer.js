'use strict';
module.exports = (sequelize, DataTypes) => {
  const lecturer = sequelize.define('lecturer', {
    name: DataTypes.STRING
  }, {});
  lecturer.associate = function(models) {
    // associations can be defined here
    lecturer.hasOne(models.subject,{
      foreignKey:'id',
      as:'lecturer'
    })
  };
  return lecturer;
};
