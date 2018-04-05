const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const privateKey = 'dimitar';

// Create connection
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '11dk11',
    database: 'cartronics',

});

// Create connection
//Jaws DB - Heroku Hosting
// const conn = mysql.createConnection({
// 	host: 'jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 	user: 'ne5fx5c8ksg1jqmx',
// 	password: 'rjed3u1bkjp1fjek',
//     database: 'zni3ag4i6twrjiqd',

// });
const port = process.env.API_PORT || 3001;

conn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected!');

});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));


app.use(router);



// Insert client
router.post('/addclient', (req, res) => {
    const reqObj = req.body;
    console.log(reqObj);
    const customers = {
        "datetoday": reqObj.datetoday,
        "fullname": reqObj.fullname,
        "homeaddress": reqObj.homeaddress,
        "contactnumber": reqObj.contactnumber,
        "work": reqObj.work,
        "emailaddress": reqObj.emailaddress,
        "findus": reqObj.findus,
        "make": reqObj.make,
        "model": reqObj.model,
        "year": reqObj.year,
        "rego": reqObj.rego,
        "colour": reqObj.colour,
        "firstrgdnz": reqObj.firstrgdnz,
        "wofexpiry": reqObj.wofexpiry,
        "odometer": reqObj.odometer
    };
    const sql = 'INSERT INTO jobsheet SET ?';
    const query = conn.query(sql, [customers], (error, results, fields) => {
        if (error) throw error;
        res.redirect('http://localhost:3000/bookonline');


    });
});
//on login
router.post('/login', (req, res, next) => {
    const reqObj = req.body;
    const username = reqObj.username;
    const password = reqObj.password;
    const sql = 'SELECT * FROM admin WHERE username =? AND password =?';
    console.log(req.body);

    const query = conn.query(sql, [username, password], (error, results, fields) => {
        if (error) throw error;

        if (results.length > 0) {

            const tokenData = {
                username: results[0].username,
                id: results[0].id
            };
            const result = {
                user: results[0],
                token: jwt.sign(tokenData, privateKey)
            };

            res.json(result);
        } else {
            res.send('XXXXXXXXXXXXXXXXXXX');
        }

    });
});

// Select users 

router.get('/selectCustomer', (req, res) => {
    const sql = 'SELECT * FROM jobsheet';
    const query = conn.query(sql, (error, result, fields) => {
        if (error) throw error;
        res.json(result);
    });
});

router.post('/searchcustomer', (req, res, next) => {
    const reqObj = req.body;
    const searchcustomer = reqObj.fullname;
    const sql = 'SELECT * FROM jobsheet WHERE fullname = ?';
    console.log(reqObj);

    const query = conn.query(sql, [searchcustomer], (error, results, fields) => {
        if (error) throw error;
        console.log('[Server.js] router.post(/searchcustomer', results);
    });
});

//Update Customer Details
router.post('/updatecustomer', (req, res) => {

    const reqObj = req.body;
    const fullname = null;//reqObj.fullname;
    const homeaddress = null;//reqObj.homeaddress;

    console.log("before update");
    const sql = "UPDATE jobsheet SET fullname = :fullname, homeaddress = :homeaddress WHERE id = '" + reqObj.id + "'";

    conn.query(sql, { fullname: fullname, homeaddress: homeaddress }, (error, results, fields) => {
        console.log("after update");
        if (error) throw error;
        res.json(results);
    });
});

//Delete Customer
router.post('/deletecustomer', (req, res) => {
    const reqObj = req.body;

    conn.query("DELETE FROM jobsheet WHERE id = " + reqObj.id, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`api port ${port}`);
});