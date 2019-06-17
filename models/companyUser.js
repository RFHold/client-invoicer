'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompanyMember = sequelize.define('CompanyUser', {
    user: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    company: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    role: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { paranoid: true });
  CompanyMember.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Company, {
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    });
    this.belongsTo(models.Role, {
      foreignKey: 'role',
      constraints: true
    });
    this.belongsTo(models.User, {
      foreignKey: 'user',
      constraints: true
    });
    this.hasMany(models.TimeEntry,{
      foreignKey:'member',
      constraints: true,
      onDelete: "CASCADE"
    });
  };
  return CompanyMember;
};