'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise(function (resolve, reject) {
      queryInterface.renameTable('Goals', 'Tasks').then(() => {
        return queryInterface.renameColumn('TimeEntries', 'goal', 'task');
      }).then(() => {
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return new Promise(function (resolve, reject) {
      queryInterface.renameTable('Tasks', 'Goals').then(() => {
        return queryInterface.renameColumn('TimeEntries', 'task', 'goal');
      }).then(() => {
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  }
};
