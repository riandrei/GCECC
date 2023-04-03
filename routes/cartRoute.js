const { Router } = require('express');
const cartControllers = require('../controllers/cartControllers');
const router = Router();

router.get('/cart/:id', cartControllers.getCartItems);
router.post('/cart/:id', cartControllers.addCartItem);
router.put('/cart/:userId/:itemId', cartControllers.updateCartItem);
router.delete('/cart/:userId/:itemId', cartControllers.deleteItem);

module.exports = router;
