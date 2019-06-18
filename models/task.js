'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    company: {
      type: DataTypes.INTEGER
    },
    client: {
      type: DataTypes.INTEGER
    },
    project: {
      type: DataTypes.INTEGER
    },
    startDate: {
      type: DataTypes.DATE
    },
    dueDate: {
      type: DataTypes.DATE
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    paranoid: true,
      getterMethods: {
        json() {
          return {
            id: this.id,
            name: this.name,
            description: this.description,
            startDate: this.startDate,
            dueDate: this.dueDate,
            project: this.project,
            client: this.client
          }
        }
      }
    });
  Task.associate = function(models) {
    // associations can be defined here
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
    this.belongsTo(models.Project, {
      foreignKey: 'project',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.TimeEntry, {
      foreignKey: 'task',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return Task;
};