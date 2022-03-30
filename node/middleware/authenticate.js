const jwt = require('jsonwebtoken')
const AuthError = require('../error/Auth')
const { StatusCodes } = require("http-status-codes")

const authenticateMiddleware = (req, res, next,) => {
    // const token = req.header('Authorization').replace('Bearer ', '')
    const header = req.header('Authorization');
    if (!header || !header.includes('Bearer ')) return next(new AuthError("please provide Header", StatusCodes.UNAUTHORIZED))
    const token = header.replace('Bearer ', '')
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