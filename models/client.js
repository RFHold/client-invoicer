'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    company: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { paranoid: true });
  Client.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Company, {
      foreignKey: 'company',
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
    this.hasMany(models.CompanyClient, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Token, {
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsToMany(models.User, {
      through: {
        model: models.CompanyClient,
        unique: false
      },
      foreignKey: 'client',
      as: "ClientUsers"
    });
  };
  return Client;
};