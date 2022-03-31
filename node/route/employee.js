const express = require('express');
const employeeRouter = express.Router();
const { getAllEmployees, deleteEmployee, addEmployee } = require('../controller/employee');

employeeRouter.get('/', getAllEmployees).delete('/', deleteEmployee).post('/', addEmployee)

module.exports = employeeRouter;