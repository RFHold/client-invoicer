'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    client: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    paid: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    due: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    discount: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    viewed: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rate: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  });
  Invoice.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.User,{
      foreignKey: 'user',
      constraints: true,
    });
    this.belongsTo(models.Client,{
      foreignKey: 'client',
      constraints: true,
    });
    this.hasMany(models.TimeEntry, {
      foreignKey: 'invoice',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return Invoice;
};