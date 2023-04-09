// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const SizeSchema = require('./Size');

// const ItemSchema = new Schema({
//   label: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   size: [SizeSchema]
// });

// module.exports = Item = mongoose.model(`item`, ItemSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  size: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Size'
    }
  ]
});

const Size = mongoose.model('Size', SizeSchema);
const Item = mongoose.model('Item', ItemSchema);

module.exports = { Size, Item };
