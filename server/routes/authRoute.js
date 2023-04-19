const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authControllers');
const authMiddleware = require('../middleware/authMiddleware');
const cookieMiddleware = require('../middleware/cookieMiddleware');

router.post('/signIn', cookieMiddleware, authController.signIn);
router.get('/user', authMiddleware, authController.getUser);

module.exports = router;
