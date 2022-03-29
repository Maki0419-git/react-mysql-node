const jwt = require('jsonwebtoken')
const AuthError = require('../error/Auth')
const { StatusCodes } = require("http-status-codes")

const authenticateMiddleware = (req, res, next,) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    try {
        const decoded = jwt.verify(token, process.env.JWT_key);
        req.id = decoded.id
        next()
    } catch (err) {
        // err
        next(new AuthError(err.message, StatusCodes.UNAUTHORIZED))
    }
}

module.exports = authenticateMiddleware;