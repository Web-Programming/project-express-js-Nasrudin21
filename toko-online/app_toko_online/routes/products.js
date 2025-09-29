var express = require('express');
var router = express.Router();
var products = require('../data/product');

router.get('/:id', function(req, res, next) {
  const productId = parseInt(req.params.id); //ambil tangkap id dari parameter URL
  const product = products.find(p => p.id === productId); //cari produk berdasarkan id

  if (!product) { //jika produk tidak ditemukan
    return res.status(404).send('Product tidak ditemukan');
  }

  res.render('product-detail',
    { 
        title: product.name, 
        product: product 
    });


});
module.exports = router;

