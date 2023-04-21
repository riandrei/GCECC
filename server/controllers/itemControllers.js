const { Item } = require('../models/Item');
const cloudinary = require('cloudinary').v2;

module.exports.getItems = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
};

module.exports.addItem = (req, res) => {
  const { label, price, category } = req.body;
  const sizes = JSON.parse(req.body.sizes);
  cloudinary.uploader
    .upload('../temp/tempfile.jpg', {
      unique_filename: true
    })
    .then((data) => {
      const img_url = data.secure_url;

      const newItem = new Item({
        label,
        price,
        category,
        sizes,
        img_url
      });

      newItem.save().then((item) => res.json(item));
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.updateItem = (req, res) => {
  Item.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (item) {
    Item.findOne({ _id: req.params.id }).then(function (item) {
      res.json(item);
    });
  });
};

module.exports.deleteItem = (req, res) => {
  Item.findByIdAndDelete({ _id: req.params.id }).then(function (item) {
    res.json({ success: true });
  });
};
