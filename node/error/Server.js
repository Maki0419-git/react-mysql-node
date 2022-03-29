const CustomAPIError = require('./CustomAPIError');

class ServerError extends CustomAPIError {
    constructor(message, code) {
        super(message, code);
    }
}

module.exports = ServerError;