'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyClient = sequelize.define('CompanyClient', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    company: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    client: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { paranoid: true });
  CompanyClient.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Company,{
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.User,{
      foreignKey: 'user',
      constraints: true
    });
    this.belongsTo(models.Client,{
      foreignKey: 'client',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return CompanyClient;
};