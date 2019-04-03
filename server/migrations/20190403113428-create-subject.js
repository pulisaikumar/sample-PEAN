'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      stud_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'students',
          foreignkey:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      sub_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'subjects',
          foreignkey:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('subjects');
  }
};
