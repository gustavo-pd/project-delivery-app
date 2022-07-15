module.exports = (sequelize, _DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {}, { timestamps: false });

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
};