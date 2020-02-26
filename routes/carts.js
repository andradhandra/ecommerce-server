const router = require('express').Router()
const { authenticate } = require('../middlewares/auth')
const CartController = require('../controllers/CartController')

router.use(authenticate)

//findAll carts belong to one user
router.get('/', CartController.findAll)

//create new cart
router.post('/', CartController.create)

//checkout user's cart
router.put('/checkout', CartController.checkout)

//findOne cart belong to one user
router.get('/:productId', CartController.findOne)

//edit user's cart
router.put('/:productId/update', CartController.update)

//delete user's cart
router.delete('/productId/delete', CartController.delete)

module.exports = router