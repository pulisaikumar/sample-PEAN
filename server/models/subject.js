'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    name: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    // associations can be defined here
    subject.belongsToMany(models.student,{
      through:'stusubject',
      as:'student',
      foreignKey:{
        name:'sub_id',
        allowNull: false
      },
    })
    subject.hasOne(models.lecturer,
      {
        foreignKey:'sub_id',
        as :'subjects'
      })
   };
  return subject;
};
