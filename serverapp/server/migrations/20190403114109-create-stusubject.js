'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('stusubjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stu_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'students',
          key:'id'
        },
        allowNull: false,
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      sub_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'subjects',
          key:'id'
        },
        allowNull: false,
        onUpdate:'cascade',
        onDelete:'cascade'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stusubjects');
  }
};
