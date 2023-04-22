const multer = require('multer');

const multerMiddleware = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: '../temp',
    filename: function (req, file, callback) {
      callback(null, `tempfile.jpg`);
    }
  });

  const upload = multer({ storage }).fields([
    { name: 'image', maxCount: 1 },
    { name: 'text', maxCount: 1 }
  ]);

  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: 'Bad request' });
    }
    return next();
  });
};

module.exports = multerMiddleware;
