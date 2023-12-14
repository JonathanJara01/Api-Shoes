const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {type: Number, required: true },
  image: {type: String, required: true},
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  specialPrices: {
    type: Map,
    of: Number,
    default: {},
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;