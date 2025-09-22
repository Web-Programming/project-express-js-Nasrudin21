var express = require('express');
var router = express.Router();
var products = require('../data/product.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
     title: 'Toko Online Modern', 
     products: products 
    });
});

module.exports = router;
