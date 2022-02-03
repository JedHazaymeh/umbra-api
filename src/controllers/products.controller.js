const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productsService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const options = pick(req.query, [
    'page',
    'limit',
    'name',
    'sortBy',
    'sortType',
    'priceFrom',
    'priceTo',
    'tags',
    'platform',
    'genre',
    'regionId',
    'languages',
    'isPreorder',
    'activePreorder',
    'updatedSince',
    'updatedTo',
    'withText'
  ]);
  const result = await productsService.queryProducts(options);
  res.send(result);
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productsService.getProductById(req.params.id);
  if (!product) throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  res.send(product);
});

module.exports = {
  getProducts,
  getProduct
};
