'use strict';

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      set(val) {
        const hash = bcrypt.hashSync(val, 10);
        this.setDataValue('password', hash);
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
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
  }, {
    getterMethods: {
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
      json() { return { 
        id: this.id,
        username: this.username,
        email: this.email,
        address: this.address,
        phone: this.phone,
        firstName: this.firstName,
        lastName: this.lastName,
        fullName: this.fullName 
      } }
    } 
  });
  User.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Client, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Project, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Task, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.TimeEntry, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Invoice, {
      foreignKey: 'user',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return User;
};