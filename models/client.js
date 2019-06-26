'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
      getterMethods: {
        json() {
          return {
            id: this.id,
            name: this.name
          }
        }
      }  
  });
  Client.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.TimeEntry, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Project, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Task, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Invoice, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return Client;
};