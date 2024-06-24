const product = require('../models/product');

const getAllProducts = async (req, res) => {
  //   throw new Error('Tseing erros');
  console.log(req.query);
  const modifiedQuerry = {};
  const { name, sort } = req.query;

  if (name) {
    modifiedQuerry.name = { $regex: name, $options: 'i' };
  }

  let result = product.find(modifiedQuerry);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    console.log(sortList);
    result.sort(sortList);
    // .skip(1).limit(10).select('name price');
  }

  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = getAllProducts;
