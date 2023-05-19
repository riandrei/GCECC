const { Router } = require('express');
const router = Router();

const orderController = require('../controllers/orderControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/orders', authMiddleware, orderController.placeOrder);
router.get('/orders/:id', authMiddleware, orderController.getUserOrders);

module.exports = router;
