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
    },
    rate: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
      getterMethods: {
        elapsed(){
          let time = 0
          if (this.TimeEntries[0]){
            this.TimeEntries.map(timeEntry => {
              time += (new Date(timeEntry.endDate).getTime() - new Date(timeEntry.startDate).getTime())
            })
          }
          return time
        },
        json() {
          return {
            id: this.id,
            name: this.name,
            description: this.description,
            startDate: this.startDate,
            dueDate: this.dueDate,
            elapsed: this.elapsed,
            project: this.project,
            client: this.client,
            rate: this.rate
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