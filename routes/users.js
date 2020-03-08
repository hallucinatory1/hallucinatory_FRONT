var express = require('express');
var client_controller = require('../controllers/client.controller');
var router = express.Router();
var stripe = require("stripe")("sk_test_cuyKhh290unGV1WIhfEHnbER000Pn8bKzh");


/* Users Checkout. */
router.post('/checkout', client_controller.client_create);

module.exports = router;