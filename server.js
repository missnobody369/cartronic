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
	database: 'cartronics'
});

const port = process.env.API_PORT || 3001;

conn.connect((err) => {
    if(err){
        throw err;
    }
    console.log('HA HA HA Try Again!!!...');
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


app.use('/api', router);



/*// Create table
app.get('/createadmintable', (req, res) => {
    let sql = 'CREATE TABLE boss(id int AUTO_INCREMENT, fullname VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Admin table created...');
    });
});*/

// Insert user 1
router.post('/addclient', (req, res) => {
    const reqObj = req.body;
    console.log(reqObj);
    const customers = {
        "datetoday" : reqObj.datetoday,
        "fullname" : reqObj.fullname,
        "homeaddress" : reqObj.homeaddress,
        "contactnumber" : reqObj.contactnumber,
        "work" : reqObj.work,
        "emailaddress" : reqObj.emailaddress,
        "findus" : reqObj.findus,
        "make" : reqObj.make,
        "model" : reqObj.model,
        "year" : reqObj.year,
        "rego" : reqObj.rego,
        "colour" : reqObj.colour,
        "firstrgdnz" : reqObj.firstrgdnz,
        "wofexpiry" : reqObj.wofexpiry,
        "odometer" : reqObj.odometer,



    };
    conn.query('INSERT INTO jobsheet SET ?', customers, (error, results, fields) => {
        if (error) throw error;
        res.redirect('http://localhost:3000/bookonline');
    });
});
//on login
router.post('/login', (req, res, next) => {
    const reqObj = req.body;
    const username = reqObj.username;
    const password = reqObj.password;
    console.log(req.body);

    conn.query('SELECT * FROM admin WHERE username =? AND password =?',[username,password], (error, results, fields) => {
        console.log("after connect");
        if (error) throw error;

        if(results.length > 0){

                const tokenData = {
                    username: results[0].username,
                    id: results[0].id
                };
                const result = {
                    user: results[0],
                    token: jwt.sign(tokenData, privateKey)
                };

                res.json(result);
        }else{
                res.send('User or Password is wrong or not exist!');
        }

    });
});

// Select users 
router.get('/getusers', (req, res) => {
    const sql = 'SELECT * FROM customers';
    const query = conn.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('customer find...');
        
    });
});


router.get('/selectCustomer', (req, res) => {
    const sql = 'SELECT * FROM jobsheet';
    const query = conn.query(sql, (error, results, fields) => {
	  if (error) throw error;
	  res.json(results);
	});
});

// Select single user 
app.get('/getuser/:id', (req, res) => {
    const sql = `SELECT * FROM jobsheet WHERE id = ${req.params.id}`;
    const query = conn.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('It Works...');
        
    });
});

app.listen(port, () => {
 console.log(`api running on port ${port}`);
});