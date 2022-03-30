const db = require('./config');
const DBError = require('../error/DB');

const sqlAsync = (sql, values) => new Promise(async (resolve, reject) => {
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("DB error")
            reject(new DBError(err.sqlMessage, err.code));
        }
        else {
            resolve(result);
        }

    })
})

module.exports = { sqlAsync }