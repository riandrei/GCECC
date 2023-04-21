const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemCategory = require('./ItemCategory');

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
    ref: 'itemCategory'
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

module.exports = Item = mongoose.model('item', ItemSchema);
