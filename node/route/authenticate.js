const express = require('express');
const authenticateRouter = express.Router();
const authenticateUser = require('../controller/authenticate')

authenticateRouter.get('/', authenticateUser)

module.exports = authenticateRouter;