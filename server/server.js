require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('config');

const authRoutes = require('./routes/authRoute');
const itemRoutes = require('./routes/itemRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');

const app = express();

// allows request from port 3000 to the server
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
// parses incoming JSON payload to the request object
app.use(express.json());
// opens API routes
app.use('/api', authRoutes);
app.use('/api', itemRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);

// serves the static assets from the client's build folder (useless for now)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// connecting to mongoDB and then running server on port 4000
const dbURI = process.env.DB_URI;
const port = process.env.PORT || 4000;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
