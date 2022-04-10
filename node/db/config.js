const mysql = require('mysql');
const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: 'yoshino90530',
    database: 'employee_system'
})



module.exports = pool;

