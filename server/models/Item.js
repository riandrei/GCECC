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
    enum: ['small', 'medium', 'large'],
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
    type: Schema.Types.ObjectId,
    ref: 'ItemCategory'
  },
  size: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Size'
    }
  ],
  img_url: String
});

const Size = mongoose.model('Size', SizeSchema);
const ItemCategory = mongoose.model('ItemCategory', ItemCategorySchema);
const Item = mongoose.model('Item', ItemSchema);

module.exports = { Item, ItemCategory };
