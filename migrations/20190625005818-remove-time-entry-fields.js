'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      queryInterface.removeColumn("TimeEntries", "employee")
      queryInterface.removeColumn("TimeEntries", "service")
      resolve()
    })
  }
};
