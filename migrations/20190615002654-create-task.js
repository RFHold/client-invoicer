'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        onDelete: "CASCADE"
      },
      client: {
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' }
      },
      project: {
        type: Sequelize.INTEGER,
        references: { model: 'Projects', key: 'id' }
      },
      startDate: {
        type: Sequelize.DATE
      },
      dueDate: {
        type: Sequelize.DATE
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Tasks');
  }
};