const { Router } = require('express');
const itemControllers = require('../controllers/itemControllers');
const router = Router();

router.get('/items', itemControllers.getItems);
router.post('/items', itemControllers.postItem);
router.put('/items/:id', itemControllers.updateItem);
router.delete('/items/:id', itemControllers.deleteItem);

module.exports = router;
