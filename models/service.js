'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    company: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rate: {
      allowNull: false,
      type: DataTypes.FLOAT
    }
  }, {
    paranoid: true,
    getterMethods: {
      json() {
        return {
          id: this.id,
          name: this.name,
          rate: this.rate
        }
      }
    }
  });
  Service.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Company, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return Service;
};