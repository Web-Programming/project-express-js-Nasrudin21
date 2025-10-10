const express = require('express');
const router = express.Router();
const Product = require('../models/products'); // pastikan path benar

// Menampilkan detail produk berdasarkan ID
router.get('/:id', async function (req, res, next) {
  try {
    const productId = req.params.id; // id dari MongoDB (string, bukan integer)
    const product = await Product.findById(productId); // ambil dari DB

    if (!product) {
      return res.status(404).send('Produk tidak ditemukan');
    }

    res.render('product-detail', {
      title: product.name,
      product: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan saat mengambil produk');
  }
});

// Menampilkan semua produk
router.get('/all', async function (req, res, next) {
  try {
    const products = await Product.find(); // ambil semua dari DB
    res.render('index', {
      title: 'Toko Online Modern',
      products: products
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Gagal memuat data produk');
  }
});

// Menampilkan detail review (contoh dummy, masih bisa pakai DB nanti)
router.get('/:productId/review/:reviewId', async function (req, res, next) {
  try {
    const { productId, reviewId } = req.params;
    const product = await Product.findById(productId); // ambil produk dari DB

    if (!product) {
      return res.status(404).send('Produk tidak ditemukan');
    }

    const review = {
      id: reviewId,
      content: `Ini adalah review ${reviewId} untuk produk ${product.name}`
    };

    res.render('review-detail', {
      title: `Ulasan ${reviewId} untuk ${product.name}`,
      product,
      review
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan saat memuat review');
  }
});

module.exports = router;