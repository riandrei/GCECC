const multer = require('multer');

const storage = multer.diskStorage({
  destination: '../temp',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e5);
    cb(null, 'image-' + uniqueSuffix + '.png');
  }
});

const upload = multer({ storage });

const multerMiddleware = (req, res, next) => {
  const uploadMiddleware = upload.array('images', 4);

  uploadMiddleware(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: 'File upload error' });
    } else if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    next();
  });
};

module.exports = multerMiddleware;
