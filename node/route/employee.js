const express = require('express');
const employeeRouter = express.Router();
const { getAllEmployees } = require('../controller/employee');

employeeRouter.get('/', getAllEmployees)

module.exports = employeeRouter;