const express = require('express');
const employeeRouter = express.Router();
const { getAllEmployees, deleteEmployee, addEmployee, editEmployee } = require('../controller/employee');

// employeeRouter.get('/', getAllEmployees).delete('/', deleteEmployee).post('/', addEmployee).put('/:id', editEmployees)
employeeRouter.route('/').get(getAllEmployees).post(addEmployee);
employeeRouter.route('/:id').put(editEmployee).delete(deleteEmployee)

module.exports = employeeRouter;