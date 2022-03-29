const express = require('express');
const app = express();
const cors = require('cors');
//route
const authRoute = require('./route/auth');
const employeeRoute = require('./route/employee');
//middleware
const HandleMiddleware = require('./middleware/error');


//middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/employee', employeeRoute);
app.use(HandleMiddleware);



// app.get('/get', (req, res) => {
//     db.query(`SELECT * from employees`, (err, result) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.send(result)
//         }

//     })
// })

app.listen(3001, () => console.log('listening on 3001...'))