'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('TimeEntries', 'employee', 'member');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('TimeEntries', 'member', 'employee');
  }
};
