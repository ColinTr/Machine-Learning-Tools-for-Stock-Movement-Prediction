const express = require('express');
const router = express.Router();

const alphavantage = require("../utils/alphavantage");
const fs = require('fs');

const csv_files_path = "./raw_data/";

/* GET home page. */
router.get('/', function (req, res, next) {

});

router.get('/intraday', function (req, res, next) {
    alphavantage.intraday()
        .then(response => {
            res.send(JSON.stringify(response)).end();
        });
});

router.get('/save_daily/:symbol', function (req, res, next) {
    if(req.params['symbol'] === undefined) {
        return res.status(400).send("Missing equity symbol").end();
    }

    alphavantage.daily(req.params['symbol'])
        .then(response => {
            const datetime = new Date();
            fs.writeFile(csv_files_path + req.params['symbol'] + "_daily" + "_" + datetime.toISOString().slice(0,10) + ".csv", JSON.stringify(response), function (err) {
                if (err) return console.log(err);
            });
            res.send(JSON.stringify(response)).end();
        });
});

module.exports = router;