const express = require('express');
const shopControllers = require('../controllers/shopControllers');
const router = express.Router();

router.get('/', shopControllers.shop);
router.get('/item:id', shopControllers.one_item);
router.post('/item:id/add', shopControllers.add_item);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.cart_post);

module.exports = router;