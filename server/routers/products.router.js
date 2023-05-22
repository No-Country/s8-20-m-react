const { Router } = require('express');
const { passportCall } = require('../config/utility/utils.js');
const {
  deleteProduct,
  getProductById,
  getProducts,
  saveProduct,
  updateProduct,
} = require('../controllers/products.controller.js');

const router = Router();

router.get('/', passportCall('jwt'), getProducts);
router.get('/:pid', getProductById);
router.post('/add', saveProduct);
router.put('/:pid', updateProduct);
router.delete('/:pid', deleteProduct);

module.exports = router;
