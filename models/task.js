'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    client: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    project: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    startDate: {
      type: DataTypes.DATE
    },
    dueDate: {
      type: DataTypes.DATE
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
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
    this.belongsTo(models.User, {
      foreignKey: 'user',
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