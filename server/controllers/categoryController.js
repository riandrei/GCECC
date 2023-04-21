const { Category } = require('../models/Category');

module.exports.getCategories = (req, res) => {
  Category.find()
    .sort({ date: -1 })
    .then((categories) => res.json(categories));
};

module.exports.addCategory = (req, res) => {};

module.exports.updateCategory = (req, res) => {};

module.exports.deleteCategory = (req, res) => {};
