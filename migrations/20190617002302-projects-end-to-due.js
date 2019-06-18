'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Projects', 'endDate', 'dueDate');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Projects', 'dueDate', 'endDate');
  }
};
