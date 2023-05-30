const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./User');

const ListingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userDomain: {
    type: String,
    required: true
  },
  title: {
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
  phoneNumber: {
    type: Number,
    required: true
  },
  img_url: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = Listing = mongoose.model('listing', ListingSchema);
