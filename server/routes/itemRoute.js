const { Router } = require('express');
const itemControllers = require('../controllers/itemControllers');
const router = Router();

router.get('/items', authMiddleware, itemControllers.getItems);
router.post('/items', adminMiddleware, itemControllers.postItem);
router.put('/items/:id', adminMiddleware, itemControllers.updateItem);
router.delete('/items/:id', adminMiddleware, itemControllers.deleteItem);

module.exports = router;
