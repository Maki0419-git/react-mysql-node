const express = require('express');
const authorizationRouter = express.Router();
const { UserLogin, UserSignUp, UserLogout } = require('../controller/authorization');

authorizationRouter.post('/login', UserLogin).post('/signup', UserSignUp).get('/logout', UserLogout);

module.exports = authorizationRouter;
