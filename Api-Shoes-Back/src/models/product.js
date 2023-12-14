const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  specialPrices: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
