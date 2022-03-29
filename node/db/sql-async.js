const db = require('./config');

const sqlAsync = (sql, values) => new Promise(async (resolve, reject) => {
    db.query(sql, values, (err, result) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(result);
        }

    })
})

module.exports = { sqlAsync }