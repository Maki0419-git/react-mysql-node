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

const deleteEmployee = async (req, res, next) => {
    const { employee_ID } = req.body
    console.log(employee_ID)
    try {
        await sqlAsync(`DELETE FROM employee_system.employees Where employee_ID=${Number(employee_ID)}`);
        res.status(StatusCodes.OK).json({ msg: "delete successful" });
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}

const addEmployee = async (req, res, next) => {
    const { name, age, country, position, wage } = req.body
    if (!name || !age || !country || !position || !wage) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "make sure that all the filed are finished!" })
    if (!Number(age) || !Number(wage)) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "age and wage must be a number" })
    try {
        const result = await sqlAsync(`INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)`, [name, Number(age), country, position, Number(wage)])
        res.status(StatusCodes.OK).json({ mag: "successfully" });
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}

module.exports = { getAllEmployees, deleteEmployee, addEmployee };