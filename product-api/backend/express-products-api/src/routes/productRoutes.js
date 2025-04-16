const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();
const productController = new ProductController();

router.post('/products', productController.addProduct.bind(productController));
router.get('/products', productController.getAllProducts.bind(productController));
router.get('/products/:id', productController.getProductById.bind(productController));
router.delete('/products/:id', productController.deleteProduct.bind(productController));

module.exports = router;