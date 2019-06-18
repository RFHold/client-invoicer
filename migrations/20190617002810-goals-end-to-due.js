'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Goals', 'endDate', 'dueDate');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Goals', 'dueDate', 'endDate');
  }
};
