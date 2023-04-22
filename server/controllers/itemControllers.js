const Item = require('../models/Item');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

module.exports.getItems = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
};

module.exports.addItem = async (req, res) => {
  const { label, description, price, category } = req.body;
  const sizes = JSON.parse(req.body.sizes);
  const images = req.files;

  const promises = images.map(async (image) => {
    const file = await cloudinary.uploader.upload(image.path, {
      unique_filename: true,
      folder: 'GCECC'
    });

    fs.unlinkSync(image.path);
    return file.secure_url;
  });

  const img_url = await Promise.all(promises);

  const newItem = new Item({ label, description, price, category, sizes, img_url });

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
