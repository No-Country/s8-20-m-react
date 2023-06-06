const { Router } = require('express');
const {
  deleteProduct,
  getProductById,
  getProducts,
  saveProduct,
  updateProduct,
  getProductByCat,
  getProductByName,
} = require('../controllers/products.controller.js');

const router = Router();

router.get('/', getProducts);
router.get('/:pid', getProductById);
router.get('/:cat', getProductByCat);
router.get('/search/:query', getProductByName);
router.post('/add', saveProduct);
router.put('/:pid', updateProduct);
router.delete('/:pid', deleteProduct);

module.exports = router;
