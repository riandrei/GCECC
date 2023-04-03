const express = require('express');
const app = express();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(`654052078162-oee7b55pllvg568frjffnjkdmpelb9j7.apps.googleusercontent.com`);

// verifies if the google jwt string from the frontend is valid
async function verify(jwt) {
  const ticket = await client.verifyIdToken({
    idToken: jwt,
    audience: `654052078162-oee7b55pllvg568frjffnjkdmpelb9j7.apps.googleusercontent.com`
  });

  const payload = ticket.getPayload();
  const userid = payload['sub'];

  return payload;
}

const cookieMiddleware = async (req, res, next) => {
  const { jwt } = req.body;

  if (jwt) {
    try {
      // assigning the payload/decoded jwt
      const userInfo = await verify(jwt);

      if (!userInfo.email.endsWith(`@gordoncollege.edu.ph`)) {
        res.status(401).json({ message: 'UnauthorizedAccess' });
        return;
      }

      req.userInfo = userInfo;
    } catch (err) {
      console.error(err);
    }
  }
  next();
};

module.exports = cookieMiddleware;
