const express = require("express");
const router = express.Router();
const elementController = require('../controllers/elementController');

router.route('/').get(
    elementController.findAll
).post(elementController.createElement);

module.exports = router;