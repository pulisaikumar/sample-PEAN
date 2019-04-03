'use strict';
module.exports = (sequelize, DataTypes) => {
  const stusubject = sequelize.define('stusubject', {
    stu_id: DataTypes.INTEGER,
    sub_id: DataTypes.INTEGER
  }, {});
  stusubject.associate = function(models) {
    // associations can be defined here
  };
  return stusubject;
};