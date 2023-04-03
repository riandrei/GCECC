const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, `Price cannot be less than 0`]
  },
  size: {
    type: String,
    required: true,
    enum: ['small', 'medium', 'large']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
