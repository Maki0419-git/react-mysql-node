const { StatusCodes } = require("http-status-codes")
const DBError = require('../error/DB')
const ServerError = require('../error/Server');
const { sqlAsync } = require('../db/sql-async');

const getAllEmployees = async (req, res, next) => {
    try {
        const allEmployees = await sqlAsync(`SELECT * FROM employee_system.employees`);
        const average = await sqlAsync(`SELECT AVG(age) as averageAge, AVG(wage) as averageWage from employee_system.employees`)
        res.status(StatusCodes.OK).json({ allEmployees, average });
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}

module.exports = { getAllEmployees };