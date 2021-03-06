'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    client: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    startDate: {
      type: DataTypes.DATE
    },
    dueDate: {
      allowNull: false,
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
            client: this.client,
            Client: (this.Client) ? this.Client.name : this.client
          }
        }
      }
    });
  Project.associate = function (models) {
    // associations can be defined here
    this.belongsTo(models.Client, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.TimeEntry, {
      foreignKey: 'project',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Task, {
      foreignKey: 'project',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return Project;
};