const { StatusCodes } = require("http-status-codes")

const authenticateUser = (req, res) => {
    res.status(StatusCodes.OK).send()
}

module.exports = authenticateUser