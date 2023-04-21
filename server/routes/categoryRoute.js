const { Router } = require('express');
const router = Router();

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const multerMiddleware = require('../middleware/multerMiddleware');
const categoryControllers = require('../controllers/categoryControllers');

router.get('/category', authMiddleware, categoryControllers.getCategories);
router.post('/category', authMiddleware, adminMiddleware, multerMiddleware, categoryControllers.addCategories);
router.put('/category/:id', authMiddleware, adminMiddleware, categoryControllers.updateCategories);
router.delete('/category/:id', authMiddleware, adminMiddleware, categoryControllers.deleteCategories);

module.exports = router;
