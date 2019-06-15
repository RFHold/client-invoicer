'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TimeEntries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      employee: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'CompanyMembers', key: 'id' }
      },
      service: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Services', key: 'id' }
      },
      company: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Companies', key: 'id' }
      },
      client: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' }
      },
      invoice: {
        type: Sequelize.INTEGER,
        references: { model: 'Invoices', key: 'id' }
      },
      project: {
        type: Sequelize.INTEGER,
        references: { model: 'Projects', key: 'id' }
      },
      goal: {
        type: Sequelize.INTEGER,
        references: { model: 'Goals', key: 'id' }
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      archived: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TimeEntries');
  }
};