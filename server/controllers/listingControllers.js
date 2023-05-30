const Listing = require('../models/Listing');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

module.exports.addItem = async (req, res) => {
  const { title, description, price, phoneNumber, userId, userDomain, userName } = req.body;
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

  const newListing = new Listing({ userId, userDomain, userName, title, description, price, phoneNumber, img_url });

  newListing.save().then((listing) => res.json(listing));
};
