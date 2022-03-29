const express = require('express');
const employeeRouter = express.Router();

employeeRouter.get('/', (req, res) => { res.json(req) })

module.exports = employeeRouter;