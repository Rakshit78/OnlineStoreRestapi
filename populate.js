require('dotenv').config();

const connectDb = require('./db/connect');
const Product = require('./models/product');
const jsonProduct = require('./products.json');

const start = async () => {
  try {
    console.log('success');
    await connectDb(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();
