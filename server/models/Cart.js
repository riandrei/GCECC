const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const User = require('./User');
const Item = require('./Item');

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: 'item',
        required: true
      },
      size: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, `Quantity cannot be less than 1`],
        default: 1
      }
    }
  ],
  bill: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = Cart = mongoose.model(`cart`, CartSchema);
