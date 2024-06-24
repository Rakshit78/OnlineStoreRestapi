const notFound = (req, res) =>
  res.status(404).json({ message: 'product route Not Found' });

module.exports = notFound;
