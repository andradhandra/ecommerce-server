'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.User)
      Cart.belongsTo(models.Product)
    }
  }
  Cart.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Cart must belongs to a user'
        }
      }
    },
    ProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.BIGINT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {sequelize});

  return Cart;
};