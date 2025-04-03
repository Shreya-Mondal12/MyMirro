const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  salePrice: {
    type: Number,
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    index: true,
  },
  subCategory: {
    type: String,
    index: true,
  },
  styles: [String],
  colors: [{
    name: String,
    hexCode: String,
  }],
  sizes: [String],
  images: [String],
  attributes: {
    material: String,
    pattern: String,
    season: [String],
    occasion: [String],
  },
  inventory: [{
    size: String,
    color: String,
    quantity: Number,
  }],
  ratings: {
    average: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for text search
ProductSchema.index({ 
  name: 'text', 
  description: 'text', 
  brand: 'text',
  'styles': 'text',
  'attributes.material': 'text',
});

// Update timestamp on save
ProductSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Product', ProductSchema);