require('dotenv').config();
//package
const express = require('express');
const app = express();
const cors = require('cors');
//route
const authorizationRouter = require('./route/authorization');
const authenticateRouter = require('./route/authenticate');
const employeeRoute = require('./route/employee');
//middleware
const HandleErrorMiddleware = require('./middleware/error');
const authenticateMiddleware = require('./middleware/authenticate');


//middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1/authorization', authorizationRouter);
app.use('/api/v1/authenticate', authenticateMiddleware, authenticateRouter);
app.use('/api/v1/employee', authenticateMiddleware, employeeRoute);
app.use(HandleErrorMiddleware);



app.listen(3001, () => console.log('listening on 3001...'))