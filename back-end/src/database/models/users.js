module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'user_id', as: 'customer' });
    users.hasMany(models.sales,
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return users;
};