'use strict';
module.exports = (sequelize, DataTypes) => {
  const lecturer = sequelize.define('lecturer', {
    name: DataTypes.STRING
  }, {});
  lecturer.associate = function(models) {
    // associations can be defined here
    lecturer.belongsTo(models.subject)
  };
  return lecturer;
};
