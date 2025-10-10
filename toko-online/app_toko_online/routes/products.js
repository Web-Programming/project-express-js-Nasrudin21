var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products');

router.get("/api/all", productsController.apiall);
// Route untuk menampilkan semua produk
router.get('/all', productsController.index);

// Route untuk menampilkan detail produk berdasarkan ID
router.get('/:id', productsController.detail);

module.exports = router;
