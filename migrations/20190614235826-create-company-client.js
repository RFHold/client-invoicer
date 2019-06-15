'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CompanyClients', {
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
      company: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Companies', key: 'id' },
        onDelete: "CASCADE"
      },
      client: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' },
        onDelete: "CASCADE"
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
    return queryInterface.dropTable('CompanyClients');
  }
};