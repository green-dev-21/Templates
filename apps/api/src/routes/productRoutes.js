const express = require('express');
const router = express.Router();
const { getProducts, getProductBySlug, getFeaturedProducts } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:slug', getProductBySlug);

module.exports = router;
