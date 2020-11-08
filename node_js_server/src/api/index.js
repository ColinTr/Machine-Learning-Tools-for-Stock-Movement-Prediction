const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Index page of the Express webserver of the project Machine Learning Tools for Stock Movement Prediction').end();
});

module.exports = router;