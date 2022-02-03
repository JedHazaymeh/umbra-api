const Joi = require('joi');

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    sortType: Joi.string().valid('desc', 'asc'),
    priceFrom: Joi.number(),
    priceTo: Joi.number(),
    tags: Joi.string(),
    platform: Joi.string(),
    genre: Joi.string(),
    regionId: Joi.number().integer(),
    languages: Joi.string(),
    isPreorder: Joi.string().valid('yes', 'no'),
    activePreorder: Joi.string().valid('yes', 'no'),
    updatedSince: Joi.string(),
    updatedTo: Joi.string(),
    withText: Joi.string().valid('yes', 'no')
  })
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.number()
  })
};

module.exports = {
  getProducts,
  getProduct
};
