'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Product extends Model {
    static associate(models) {
      //association can be found here
      Product.belongsToMany(models.User, { through: models.Cart })
      Product.hasMany(models.Cart)
      Product.belongsTo(models.Category)
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product name cannot empty"
        },
        notEmpty: {
          msg: "Product name cannot empty"
        }
      }
    },
    image_url: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product price cannot null"
        }
      }
    },
    stock: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Product stock cannot null"
        },
        min: {
          args: 0,
          msg: 'Stock depleted'
        }
      }
    },
    CategoryId: DataTypes.INTEGER
  }, {sequelize});

  return Product;
};