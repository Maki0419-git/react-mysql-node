const express = require('express');
const employeeRouter = express.Router();
const { getAllEmployees, deleteEmployee, addEmployee, editEmployee } = require('../controller/employee');

// employeeRouter.get('/', getAllEmployees).delete('/', deleteEmployee).post('/', addEmployee).put('/:id', editEmployees)
employeeRouter.route('/').get(getAllEmployees).delete(deleteEmployee).post(addEmployee);
employeeRouter.route('/:id').put(editEmployee);

module.exports = employeeRouter;