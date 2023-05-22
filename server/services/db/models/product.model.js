const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const productsCollection = 'products';

const stringTypeSchemaUniqueRequired = {
  type: String,
  unique: true,
  required: true,
};
const stringTypeSchemaNonUniqueRequired = {
  type: String,
  required: true,
};
const booleanTypeSchemaNonUniqueRequired = {
  type: Boolean,
  required: true,
};
const arrayTypeSchemaNonUniqueRequired = {
  type: Array,
  required: true,
};
const productSchema = new mongoose.Schema({
  title: stringTypeSchemaNonUniqueRequired,
  description: stringTypeSchemaNonUniqueRequired,
  thumbnail: stringTypeSchemaNonUniqueRequired,
  code: stringTypeSchemaUniqueRequired,
  category: arrayTypeSchemaNonUniqueRequired,
  available: booleanTypeSchemaNonUniqueRequired,
});

productSchema.plugin(mongoosePaginate);
const productModel = mongoose.model(productsCollection, productSchema);
module.exports = productModel;
