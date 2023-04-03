const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  items: [
    {
      product_id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, `Quantity cannot be less than 1`],
        default: 1
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  bill: {
    type: Number,
    required: true,
    default: 0
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model(`order`, OrderSchema);
