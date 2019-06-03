'use strict';
module.exports = (sequelize, DataTypes) => {
  const stusubject = sequelize.define('stusubject', {
    stu_id: DataTypes.INTEGER,
    sub_id: DataTypes.INTEGER
  }, {});
  stusubject.associate = function(models) {
    // associations can be defined here
    stusubject.belongsTo(models.student,{
      foreignKey:{
        name:'stu_id',
        allowNull: false
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })
    stusubject.belongsTo(models.subject,{
      foreignKey:{
        name:'sub_id',
        allowNull: false
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    })
  };
  return stusubject;
};
