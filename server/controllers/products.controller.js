const ProductService = require('../services/db/dao/product.service.js');

const productService = new ProductService();

const getProducts = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    if (!page) page = 1;
    let result = await productService.getProducts(page);
    result.prevLink = result.hasPrevPage
      ? `http://localhost:9090/api/products?page=${result.prevPage}`
      : '';
    result.nextLink = result.hasNextPage
      ? `http://localhost:9090/api/products?page=${result.nextPage}`
      : '';
    result.isValid = !(page <= 0 || page > result.totalPages);
    res.render('products', result);
  } catch (error) {
    res.status(500).send({ error: error, message: 'error getting products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.pid;
    let filterProd = await productService.getProductById(productId);
    if (filterProd) {
      res.send({ status: 'success', message: filterProd });
    } else {
      res.send({ status: 'error', message: 'Invalid product id' });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: error, message: 'error getting product by id' });
  }
};

const saveProduct = async (req, res) => {
  let data = req.body;
  try {
    let newProd = await productService.addProduct(data);
    res.send({ status: 'success', message: newProd });
  } catch (error) {
    res.status(500).send({ error: error, message: 'error creating product' });
  }
};
const updateProduct = async (req, res) => {
  try {
    const prodId = req.params.pid;
    const newProd = req.body;
    await productService.updateProduct(prodId, newProd);
    res.send({
      status: 'success',
      message: `product with id: ${prodId} updated successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error, message: 'Error updating product.' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.pid;
    let prodDeleted = await productService.deleteProduct(productId);
    res.status(201).send(prodDeleted);
  } catch (error) {
    res.status(500).send({ error: error, message: 'Error deleting product.' });
  }
};
module.exports = {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
};
