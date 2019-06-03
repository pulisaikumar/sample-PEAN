'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
    student.belongsToMany(models.subject,{
      through:'stusubject',
      as:'subject',
      foreignKey:
        {
          name:'stu_id',
          allowNull: false
        },
    })

  };
  return student;
};
