'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('CompanyClients', 'ClientUsers')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('ClientUsers', 'CompanyClients')
  }
};
