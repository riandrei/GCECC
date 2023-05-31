const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Item = require('./Item');
const User = require('./User');

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userDepartment: {
    type: String,
    required: true
  },
  userDomain: {
    type: String,
    required: true
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: 'item',
        required: true
      },
      label: {
        type: String,
        required: true
      },
      img_url: {
        type: String
      },
      price: {
        type: Number,
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
  },
  status: {
    type: String,
    enum: ['submitted', 'ready', 'received']
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  estimatedDate: {
    type: Date,
    default: function () {
      const now = new Date();
      return new Date(now.setDate(now.getDate() + 7));
    }
  }
});

module.exports = Order = mongoose.model(`order`, OrderSchema);
