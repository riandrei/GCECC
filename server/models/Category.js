const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = Category = mongoose.model('category', CategorySchema);
