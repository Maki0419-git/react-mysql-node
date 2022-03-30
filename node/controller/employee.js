const { StatusCodes } = require("http-status-codes")
const DBError = require('../error/DB')
const ServerError = require('../error/Server');
const { sqlAsync } = require('../db/sql-async');

const getAllEmployees = async (req, res, next) => {
    try {
        const result = await sqlAsync(`SELECT * FROM employee_system.employees`);
        res.status(StatusCodes.OK).json(result);
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}

module.exports = { getAllEmployees };