const express = require('express');
require('dotenv').config();
require('express-async-errors');
const app = express();
const notFound = require('./midleware/not-found');
const ErrorHandler = require('./midleware/error-handler');
const connectDb = require('./db/connect');
const storeRouter = require('./routes/products');
const port = process.env.Port || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>store api</h1> <a href="/api/v1/products">products</a>');
});

app.use('/api/v1/products', storeRouter);

app.use(ErrorHandler);
app.use(notFound);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('connected to server', port);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
