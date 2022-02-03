const express = require('express');
const validate = require('../../middlewares/validate');
const productsValidation = require('../../validations/products.validation');
const productsController = require('../../controllers/products.controller');

const router = express.Router();

router.get('/', validate(productsValidation.getProducts), productsController.getProducts);
router.get('/:id', validate(productsValidation.getProduct), productsController.getProduct);

module.exports = router;
