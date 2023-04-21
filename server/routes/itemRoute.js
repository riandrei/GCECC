const { Router } = require('express');
const router = Router();

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const itemControllers = require('../controllers/itemControllers');

router.get('/items', authMiddleware, itemControllers.getItems);
router.post('/items', authMiddleware, adminMiddleware, itemControllers.postItem);
router.put('/items/:id', authMiddleware, adminMiddleware, itemControllers.updateItem);
router.delete('/items/:id', authMiddleware, adminMiddleware, itemControllers.deleteItem);

module.exports = router;
