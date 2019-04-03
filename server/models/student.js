'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
    student.belongsToMany(models.subject,{
      through:'stusubject',
      foreignKey:'stud_id',
      as:'student'
    })
  };
  return student;
};
