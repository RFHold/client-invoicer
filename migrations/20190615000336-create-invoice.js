'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoices', {
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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' },
        onDelete: "CASCADE"
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dueDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      paid: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      due: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      discount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      rate: {
        allowNull: false,
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Invoices');
  }
};