
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { StatusCodes } = require("http-status-codes")
const DBError = require('../error/DB')
const ServerError = require('../error/Server');
const { sqlAsync } = require('../db/sql-async');

const UserLogin = (req, res) => {
    res.send(req.body)
}


const UserSignUp = async (req, res, next) => {
    const { account, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = password ? bcrypt.hashSync(password, salt) : ""
    try {
        const result = await sqlAsync(`INSERT INTO user (account, password) VALUES (NULLIF(?, ''),NULLIF(?, ''))`,
            [account, hash])
        console.log(result);
        console.log("end");
        const token = jwt.sign({ id: result.insertId.toString() }, process.env.JWT_key, { expiresIn: '1 day' })
        res.status(StatusCodes.OK).json({ message: result.message || "success", token })
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}

module.exports = { UserLogin, UserSignUp }
