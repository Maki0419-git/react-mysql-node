const { StatusCodes } = require("http-status-codes")

const HandleErrorMiddleware = (err, req, res, next) => {
    let response = {
        message: err.message || 'something went wrong',
        code: err.code || StatusCodes.INTERNAL_SERVER_ERROR
    }

    if (response.code === `ER_BAD_NULL_ERROR`) {
        response.code = StatusCodes.BAD_REQUEST
        const splitMsg = response.message.split(" ")
        splitMsg.splice(0, 1);
        response.message = splitMsg.join(" ");
    }

    res.status(response.code).json({ msg: response.message })


}

module.exports = HandleErrorMiddleware