const db = require('../db/config');
const { StatusCodes } = require("http-status-codes")
const DBError = require('../error/DB')
const { sqlAsync } = require('../db/sql-async');

const UserLogin = (req, res) => {

}


const UserSignUp = async (req, res, next) => {
    const { account, password } = req.body;
    try {
        const result = await sqlAsync(`INSERT INTO user (account, password) VALUES (NULLIF(?, ''),NULLIF(?, ''))`,
            [account, password])
        console.log(result);
        console.log("end");
        res.status(StatusCodes.OK).json({ message: result.message || "success", id: result.insertId })
    } catch (err) {
        next(new DBError(err.sqlMessage, err.code));
    }
}

module.exports = { UserLogin, UserSignUp }
