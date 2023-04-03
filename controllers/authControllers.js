require('dotenv').config();

const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.signIn = (req, res) => {
  const { name, email } = req.userInfo;
  const googleId = req.userInfo.sub;

  User.findOne({ email }).then((user) => {
    // if the user doesn't exist
    if (!user) {
      const newUser = new User({ name, email, googleId });
      newUser.save().then((user) => {
        jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              googleId: user.googleId
            }
          });
        });
      });
    } else {
      jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            googleId: user.googleId
          }
        });
      });
    }
  });
};

module.exports.getUser = (req, res) => {
  User.findById(req.user.googleId).then((user) => res.json(user));
};
