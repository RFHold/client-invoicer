'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeEntry = sequelize.define('TimeEntry', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    member: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    service: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    company: {
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
      type: DataTypes.INTEGER,
    },
    task: {
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
    },
    archived: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { paranoid: true});
  TimeEntry.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true
    });
    this.belongsTo(models.CompanyUser, {
      foreignKey: 'member',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Service, {
      foreignKey: 'service',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Company, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Client, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Invoice, {
      foreignKey: 'invoice',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Project, {
      foreignKey: 'project',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Task, {
      foreignKey: 'task',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return TimeEntry;
};