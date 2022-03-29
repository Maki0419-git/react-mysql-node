const express = require('express');
const authorizationRouter = express.Router();
const { UserLogin, UserSignUp } = require('../controller/authorization');

authorizationRouter.post('/login', UserLogin).post('/signup', UserSignUp);

module.exports = authorizationRouter;
