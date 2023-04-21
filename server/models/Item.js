const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true
  }
});

const SizeSchema = new Schema({
  size: {
    type: String,
    enum: ['small', 'medium', 'large', 'extra_large'],
    required: true
  },
  inventory: {
    type: Number,
    default: 0,
    required: true
  }
});

const ItemSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  sizes: [
    {
      size: {
        type: String,
        enum: ['small', 'medium', 'large', 'extra_large'],
        required: true
      },
      inventory: {
        type: Number,
        default: 0,
        required: true
      }
    }
  ],
  img_url: {
    type: String,
    required: true
  }
});

const Size = mongoose.model('size', SizeSchema);
const ItemCategory = mongoose.model('itemCategory', ItemCategorySchema);
const Item = mongoose.model('item', ItemSchema);

module.exports = { Item, ItemCategory };
