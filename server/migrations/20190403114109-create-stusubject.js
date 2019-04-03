'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /** @namespace Sequelize.INTEGER */
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
          foreignkey:'stu_id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      sub_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'subjects',
          foreignkey:'sub_id'
        },
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
