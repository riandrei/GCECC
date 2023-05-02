const { Router } = require('express');
const router = Router();

const authMiddleware = require('../middleware/authMiddleware');
const cartControllers = require('../controllers/cartControllers');

router.get('/cart/:id', authMiddleware, cartControllers.getCart);
router.post('/cart/:id', authMiddleware, cartControllers.addCartItem);
// router.put('/cart/:userId/:itemId', cartControllers.updateCartItem);
// router.delete('/cart/:userId/:itemId', cartControllers.deleteItem);

module.exports = router;
