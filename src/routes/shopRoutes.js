const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopControllers');

router.get('/', shopController.shop);
router.get('/item/:id', shopController.item);
router.post('/item/:id/add', shopController.addItem);
router.get('/cart', shopController.cart);
router.post('/cart',shopController.addCart);
module.exports = router;

