const { Router } = require('express');
const router = Router();

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const multerMiddleware = require('../middleware/multerMiddleware');
const categoryControllers = require('../controllers/categoryControllers');

router.get('/category', authMiddleware, categoryControllers.getCategories);
router.post('/category', authMiddleware, adminMiddleware, categoryControllers.addCategory);
router.put('/category/:id', authMiddleware, adminMiddleware, categoryControllers.updateCategory);
router.delete('/category/:id', authMiddleware, adminMiddleware, categoryControllers.deleteCategory);

module.exports = router;
