const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product');

//url create  - POST (/api/products)
router.post('/', productController.create);
//url read all - GET (/api/products)
router.get('/', productController.all);
//url read one - detail - GET (/api/products/:id)
router.get('/:id', productController.detailproduct);
//url update  -PUT (/api/products/:id)
router.put('/:id', productController.update);
//url delete - remove - DELETE (/api/products/:id)
router.delete('/:id', productController.delete);

module.exports = router;