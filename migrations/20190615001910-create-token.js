'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      action: {
        allowNull: false,
        type: Sequelize.ENUM('joinGroup', 'changePassword', 'verifyEmail', 'viewInvoice', 'client')
      },
      company: {
        type: Sequelize.INTEGER,
        references: { model: 'Companies', key: 'id' }
      },
      user: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      client: {
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' }
      },
      invoice: {
        type: Sequelize.INTEGER,
        references: { model: 'Invoices', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DeletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tokens');
  }
};