'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeEntry = sequelize.define('TimeEntry', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    client: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    invoice: {
      type: DataTypes.INTEGER,
    },
    project: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    task: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  TimeEntry.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true
    });
    this.belongsTo(models.Task, {
      foreignKey: 'task',
      constraints: true
    });
    this.belongsTo(models.Project, {
      foreignKey: 'project',
      constraints: true
    });
    this.belongsTo(models.Client, {
      foreignKey: 'client',
      constraints: true
    });
    this.belongsTo(models.Invoice, {
      foreignKey: 'invoice',
      constraints: true
    });
  };
  return TimeEntry;
};