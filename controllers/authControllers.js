require('dotenv').config();

const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.signIn = (req, res) => {
  const { name, email } = req.userInfo;
  const googleId = req.userInfo.sub;

  // finds the user's email from the mongoDB database
  User.findOne({ email }).then((user) => {
    // if the user doesn't exist
    if (!user) {
      const newUser = new User({ name, email, googleId });

      // saves user info to the mongoDB atlas database
      newUser.save().then((user) => {
        // creates a jwt that lasts for an hour which can be used to access other routes
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
      // creates a jwt that lasts for an hour which can be used to access other routes
      jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        if (user.email === process.env.ADMIN_EMAIL) {
          res.json({
            token,
            user: {
              googleId: user.googleId,
              admin: true
            }
          });
        } else {
          res.json({
            token,
            user: {
              admin: false
            }
          });
        }
      });
    }
  });
};

module.exports.getUser = (req, res) => {
  User.findById(req.user.id).then((user) => res.json(user));
};
