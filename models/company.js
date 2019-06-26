'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id' },
      onDelete: "CASCADE"
    }
  }, {
    paranoid: true, 
    getterMethods: {
      json() {
        return {
          id: this.id,
          name: this.name
        }
      }
    }  
  });
  Company.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Role,{
      foreignKey:'company',
      constraints:true,
      onDelete:"CASCADE"
    });
    this.hasMany(models.ClientUser,{
      foreignKey:'company',
      constraints:true,
      onDelete:"CASCADE"
    });
    this.hasMany(models.Service,{
      foreignKey:'company',
      constraints:true,
      onDelete:"CASCADE"
    });
    this.hasMany(models.Invoice,{
      foreignKey:'company',
      constraints:true,
      onDelete:"CASCADE"
    });
    this.hasMany(models.TimeEntry,{
      foreignKey:'company',
      constraints:true,
      onDelete:"CASCADE"
    });
    this.hasMany(models.Token, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Client, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true
    });
    this.hasMany(models.Project, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.hasMany(models.Task, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsToMany(models.User, {
      through: {
        model: models.CompanyUser,
        unique: false
      },
      foreignKey: 'company',
      otherKey: 'user',
      as: "CompanyUsers"
    });
  };
  return Company;
};