const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: process.env.SQL_key,
    database: 'employee_system'
})

module.exports = db;