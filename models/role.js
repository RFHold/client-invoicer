'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    company: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    permissions: {
      type: DataTypes.INTEGER
    }
  }, { paranoid: true });
  Role.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.CompanyUser,{
      foreignKey: 'role',
      constraints: true
    });
    this.belongsTo(models.Company,{
      foreignKey: 'company',
      constraints: true,
      onDelete: "CASCADE"
    })
  };
  return Role;
};