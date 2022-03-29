const { StatusCodes } = require("http-status-codes")


class DBError {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
}

module.exports = DBError;
