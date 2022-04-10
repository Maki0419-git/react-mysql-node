const { StatusCodes } = require("http-status-codes")
const jwt = require('jsonwebtoken')
const AuthError = require('../error/Auth')

const authenticateUserMiddleware = (req, res, next) => {
    console.log(req.session)
    if (req.session.user_ID) {
        console.log("refresh token")
        const token = jwt.sign({ id: req.session.user_ID.toString() }, process.env.JWT_key, { expiresIn: 1000 })
        res.status(StatusCodes.OK).send({ msg: "authorized", token })
    } else {
        next(new AuthError('login failed', StatusCodes.UNAUTHORIZED))
    }
}

module.exports = authenticateUserMiddleware;