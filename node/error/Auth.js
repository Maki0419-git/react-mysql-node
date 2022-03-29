const CustomAPIError = require('./CustomAPIError');

class AuthError extends CustomAPIError {
    constructor(message, code) {
        super(message, code);
    }
}

module.exports = AuthError;