const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'Price name must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  ratting: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // for accepting values with same emum
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: `{value} is not supported`,
    },
  },
});

module.exports = mongoose.model('product', schema);
