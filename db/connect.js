const mongose = require('mongoose');

const connectDb = (url) => {
  mongose.connect(url);
};

module.exports = connectDb;
