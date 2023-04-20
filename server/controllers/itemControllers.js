const Item = require('../models/Item');
const cloudinary = require('cloudinary').v2;

module.exports.getItems = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
};

module.exports.postItem = (req, res) => {
  const { label, price, category, size, image } = req.formData;

  cloudinary.uploader
    .upload(image, {
      unique_filename: true
    })
    .then((data) => {
      const imageURL = data.secure_url;
    })
    .catch((err) => {
      console.log(err);
    });

  const newItem = new Item({
    label,
    price,
    category,
    size,
    imageURL
  });

  newItem.save().then((item) => res.json(item));
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
