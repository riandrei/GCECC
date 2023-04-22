const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = require('./Category');

const ItemSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
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
  img_url: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = Item = mongoose.model('item', ItemSchema);
