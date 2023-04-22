const Category = require('../models/Category');

module.exports.getCategories = (req, res) => {
  Category.find()
    .sort({ category_name: 1 })
    .then((categories) => {
      return res.json(categories);
    });
};

module.exports.addCategory = (req, res) => {
  const category_name = req.body.formData;
  const newCategory = new Category({ category_name });

  newCategory.save().then((category) => res.json(category));
};

module.exports.updateCategory = (req, res) => {};

module.exports.deleteCategory = (req, res) => {};
