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
    dueDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    date: {
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
    rate: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
      getterMethods: {
        json() {
          return {
            id: this.id,
            client: (this.Client) ? this.Client.name : this.client,
            date: this.date,
            startDate: this.startDate,
            endDate: this.endDate
          }
        }
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