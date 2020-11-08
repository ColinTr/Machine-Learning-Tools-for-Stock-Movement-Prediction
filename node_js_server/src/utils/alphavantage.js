const alpha = require('alphavantage')({ key: 'D0AZ0XMNUVI4NNVW' });

exports.intraday = function intraday() {
    return new Promise(((resolve, reject) => {
        alpha.data.intraday("IBM", "full", "json", "5min")
            .then(data => {
                resolve(data);
            }).catch(errMsg => {
                reject(errMsg);
        });
    }));
};
exports.daily = function daily(symbol) {
    return new Promise(((resolve, reject) => {
        alpha.data.daily(symbol, "full", "json", "5min")
            .then(data => {
                resolve(data);
            }).catch(errMsg => {
                reject(errMsg);
        });
    }));
};