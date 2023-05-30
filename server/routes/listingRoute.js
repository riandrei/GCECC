const { Router } = require('express');
const router = Router();

const authMiddleware = require('../middleware/authMiddleware');
const multerMiddleware = require('../middleware/multerMiddleware');
const listingControllers = require('../controllers/listingControllers');

router.get('/listings', authMiddleware, listingControllers.getListings);
router.post('/listings', authMiddleware, multerMiddleware, listingControllers.addListing);

module.exports = router;
