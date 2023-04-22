const Category = require('../models/Category');

module.exports.getCategories = (req, res) => {
  Category.find()
    .sort({ category_name: 1 })
    .then((categories) => {
      console.log(categories);
      return res.json(categories);
    });
};

module.exports.addCategory = (req, res) => {};

module.exports.updateCategory = (req, res) => {};

module.exports.deleteCategory = (req, res) => {};
