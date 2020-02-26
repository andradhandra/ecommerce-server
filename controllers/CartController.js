const { User, Product, Cart, sequelize  } = require('../models')

class CartController {
  static findAll(req, res, next) {
    const { currentUserId } = req
    Cart.findAll({
      where: {
        UserId: currentUserId
      },
      include: [User, Product],
      order: [['id']]
    })
    .then(carts => res.status(200).json(carts))
    .catch(next)
  }

  static findOne(req, res, next) {
    const { currentUserId } = req
    const { productId } = req.params
    Cart.findOne({
      where: {
        UserId: currentUserId,
        ProductId: productId
      },
      include: [User, Product]
    })
    .then(cart => res.status(200).json(cart))
    .catch(next)
  }

  static create(req, res, next) {
    const { currentUserId } = req
    const { productId } = req.params
    const { quantity, total_price } = req.body
    Cart.create({
      UserId: currentUserId,
      ProductId: productId,
      quantity,
      total_price
    })
      .then(() => res.status(201).json({ message: 'Create cart successful' }))
      .catch(next)
  }

  static update(req, res, next) {
    const { currentUserId } = req
    const { productId } = req.params
    const { quantity, total_price } = req.body
    Cart.update({
      where: {
        UserId: currentUserId,
        ProductId: productId,
        quantity,
        total_price
      }
    })
    .then(() => res.status(201).json({ message: 'Update cart successful' }))
    .catch(next)
  }

  static delete(req, res, next) {
    const { currentUserId } = req
    const { productId } = req.params
    Cart.destroy({
      where: {
        UserId: currentUserId,
        ProductId: productId
      }
    })
    .then(() => res.status(200).json({ message: 'Delete cart successful' }))
    .catch(next)
  }

  static checkout(req, res, next) {
    const { currentUserId } = req
    //find all user's carts
    Cart.findAll({
      where: {
        UserId: currentUserId
      },
      include: [User, Product],
      order: [['id']]
    })
    .then(carts => {
      let promiseCart = []
      let promiseProduct = []

      //using sequelize transaction
      sequelize.trasaction(trasaction => {

        //pushing array of promises based on the carts
        carts.forEach(cart => {
          promiseCart.push(new Promise(Cart.update({ status: true }, {
            where: {
              UserId: cart.UserId,
              ProductId: cart.ProductId
            },
            trasaction
          })))
          promiseProduct.push(new Promise(Product.decrement('stock', {
            by: cart.quantity,
            where: {
              id: cart.ProductId
            }, 
            trasaction
          })))
        })

        //running all promises with promise all
        return Promise.all([...promiseCart, ...promiseProduct])
      })
      .then(() => {
        //if success, send messege
        res.status(200).json({ message: 'Cart checkout successful' })
      })
      //if not, rollback
      .catch(next)
    })
  }
}

module.exports = CartController