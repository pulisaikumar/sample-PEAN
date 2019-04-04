'use strict';
module.exports = (sequelize, DataTypes) => {
  const subject = sequelize.define('subject', {
    name: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    // associations can be defined here
    subject.belongsToMany(models.student,{
      through:'stusubject',
      foreignKey:'sub_id',
      as:'course'
    })
    subject.hasOne(models.lecturer,
      {
        foreignKey:'sub_id',
        as :'subject'
      })
   };
  return subject;
};
