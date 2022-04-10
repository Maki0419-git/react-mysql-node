const bcrypt = require('bcryptjs'); //doc:https://www.npmjs.com/package/bcryptjs
const jwt = require('jsonwebtoken')
const { StatusCodes } = require("http-status-codes")
const DBError = require('../error/DB')
const ServerError = require('../error/Server');
const { sqlAsync } = require('../db/sql-async');

const UserLogin = async (req, res, next) => {

    //get request body
    const { account, password } = req.body;
    // return if user or password is invalid
    if (!account || !password) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide account and password" });
    try {
        //get user_ID,account,password in db
        const result = await sqlAsync(`SELECT user_ID,account,password FROM user Where account="${account}"`)
        if (!result.length) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "account isn't exist" });
        //check password
        const hash = result[0].password;
        const ifCorrect = bcrypt.compareSync(password, hash);
        if (!ifCorrect) return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Wrong password" });
        // session setting
        req.session.user_ID = result[0].user_ID
        console.log(req.session)
        console.log(req.sessionID)
        // generate token
        const token = jwt.sign({ id: result[0].user_ID.toString() }, process.env.JWT_key, { expiresIn: 1000 })
        res.status(StatusCodes.OK).json({ msg: "authorized", token })
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}


const UserSignUp = async (req, res, next) => {
    //get request body
    const { account, password } = req.body;
    if (!account || !password) return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide account and password" });
    // generate password's hash
    const salt = bcrypt.genSaltSync(10);
    const hash = password ? bcrypt.hashSync(password, salt) : ""
    try {
        // insert to db
        const result = await sqlAsync(`INSERT INTO user (account, password) VALUES (?,?)`, [account, hash])
        // session setting
        req.session.user_ID = result.insertId
        console.log(req.session)
        console.log(req.sessionID)
        // generate token
        const token = jwt.sign({ id: result.insertId.toString() }, process.env.JWT_key, { expiresIn: 1000 })
        res.status(StatusCodes.OK).json({ msg: result.message || "success", token })
    } catch (err) {
        if (err instanceof DBError) {
            next(err);
        } else {
            next(new ServerError(err.message, StatusCodes.INTERNAL_SERVER_ERROR))
        }
    }
}

const UserLogout = (req, res) => {
    req.session.destroy((err) => {
        if (err) return next(err);
        console.log("UserLogout")
        res.status(StatusCodes.OK).json({ msg: 'logout successfully' })

    })
}

module.exports = { UserLogin, UserSignUp, UserLogout }
