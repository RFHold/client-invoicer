'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    verified: {
      type: DataTypes.BOOLEAN
    }
  }, { paranoid: true });
  User.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Token, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.CompanyMember, {
      foreignKey: 'user',
      constraints: true
    });
    this.hasMany(models.CompanyClient, {
      foreignKey: 'user',
      constraints: true
    });
    this.hasMany(models.TimeEntry, {
      foreignKey: 'user',
      constraints: true
    });
    this.hasMany(models.Company, {
      foreignKey: 'user',
      constraints: true
    });
  };
  return User;
};