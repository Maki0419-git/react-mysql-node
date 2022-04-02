const mysql = require('mysql');
const pool = mysql.createPool({
    user: 'b993a540e58000',
    host: 'us-cdbr-east-05.cleardb.net',
    password: process.env.SQL_key,
    database: 'heroku_2a1c4256deebb6d'
})



module.exports = pool;

