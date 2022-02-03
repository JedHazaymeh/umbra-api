const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const axios = require('axios');
const config = require('../config/config');

/**
 * Query for Kinguin products
 * @param {Object} options - Query options
 * @param {number} [options.page] - Current page (default = 1)
 * @param {number} [options.limit] - Maximum number of results per page (default = 25)
 * @param {string} [options.name] - Search by product name (minimum: 3 characters)
 * @param {string} [options.sortBy] - Sort by field name
 * @param {string} [options.sortType] - Sort type (asc|desc)
 * @param {number} [options.priceFrom] - Start of price range
 * @param {number} [options.priceTo] - End of price range
 * @param {string} [options.tags] - Comma separated list of Tags
 * @param {string} [options.platform] - Comma separated list of platforms
 * @param {string} [options.genre] - Comma separated list of Genres
 * @param {number} [options.regionId] - Number id of region
 * @param {string} [options.languages] - Available languages
 * @param {string} [options.isPreorder] - Pre-order (yes|no)
 * @param {string} [options.activePreorder] - Active pre-order (yes|no)
 * @param {string} [options.updatedSince] - Date in formats (Y-m-d, Y-m-d H:i:s)
 * @param {string} [options.updatedTo] - Date in formats (Y-m-d, Y-m-d H:i:s)
 * @param {string} [options.withText] - Filter products only with text serials (yes|no)
 * @returns {Promise<Product[]>}
 */
const queryProducts = async (options) => {
  const { data } = await axios({
    url: 'https://gateway.kinguin.net/esa/api/v1/products',
    method: 'GET',
    headers: {
      'X-Api-Key': config.kinguin
    },
    params: options
  });
  return data;
};

/**
 * Get product by id
 * @param {number} id
 * @returns {Promise<Product>}
 */
const getProductById = async (id) => {
  const product = Product.findById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
};

module.exports = {
  queryProducts,
  getProductById
};
