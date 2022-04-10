const express = require('express');
const authenticateRouter = express.Router();
const { UserLogin, UserSignUp, UserLogout } = require('../controller/authenticate');

authenticateRouter.post('/login', UserLogin).post('/signup', UserSignUp).get('/logout', UserLogout);

module.exports = authenticateRouter;