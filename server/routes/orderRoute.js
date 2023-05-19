const { Router } = require('express');
const router = Router();

const orderController = require('../controllers/orderControllers');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/orders', authMiddleware, orderController.placeOrder);
router.get('/orders/:id', authMiddleware, orderController.getUserOrders);
router.get('/orders/', authMiddleware, adminMiddleware, orderController.getOrders);

module.exports = router;
