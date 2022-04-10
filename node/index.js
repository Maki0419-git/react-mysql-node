require('dotenv').config();
// package
const express = require('express');
const app = express();
app.set('trust proxy', 1) // trust first proxy
const cors = require('cors');
const session = require('express-session')
// route
const authenticateRouter = require('./route/authenticate');
const employeeRoute = require('./route/employee');
// custom middleware
const HandleErrorMiddleware = require('./middleware/error');
const authenticateTokenMiddleware = require('./middleware/authenticateToken');
const authenticateUserMiddleware = require('./middleware/authenticateUser');


// middleware
app.use(cors({
    origin: 'https://maki0419-git.github.io',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
}));
// session setting
app.use(session({
    secret: process.env.Session_key,
    name: 'user_ID',
    saveUninitialized: false,
    proxy: true,
    resave: true,
    cookie: {
        domain: 'https://maki0419-git.github.io/',
        sameSite: 'none',
        secure: (process.env.NODE_ENV && process.env.NODE_ENV == 'production') ? true : false
    }
}))
app.use(express.json());
app.use('/api/v1/authenticate', authenticateRouter);
app.use('/api/v1/authenticateUser', authenticateUserMiddleware);
app.use('/api/v1/employee', authenticateTokenMiddleware, employeeRoute);
app.use(HandleErrorMiddleware);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`))