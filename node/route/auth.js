const express = require('express');
const authRouter = express.Router();
const { UserLogin, UserSignUp } = require('../controller/auth');

authRouter.post('/login', UserLogin).post('/signup', UserSignUp);

module.exports = authRouter;
