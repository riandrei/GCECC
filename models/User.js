const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // this might not be needed as we are using google API but I'm keeping it for now since I'm not sure
    validate: [isEmail, 'Please enter a valid email address.']
  },
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
