'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    token: {
      allowNull: false,
      type: DataTypes.STRING
    },
    action: {
      allowNull: false,
      type: DataTypes.ENUM('joinGroup', 'changePassword', 'verifyEmail', 'viewInvoice', 'client')
    },
    company: {
      type: DataTypes.INTEGER
    },
    user: {
      type: DataTypes.INTEGER
    },
    client: {
      type: DataTypes.INTEGER
    },
    invoice: {
      type: DataTypes.INTEGER
    }
  }, { paranoid: true });
  Token.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Company, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
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
    this.belongsTo(models.Invoice, {
      foreignKey: 'invoice',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return Token;
};