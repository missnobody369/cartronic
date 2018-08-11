const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const router = express.Router();
const jwt = require("jsonwebtoken");
const privateKey = "dimitar";

// Create connection
// const conn = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "11dk11",
//   database: "cartronics"
// });

// Create connection
// Jaws DB - Heroku Hosting
const conn = mysql.createConnection({
  host: "jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ne5fx5c8ksg1jqmx",
  password: "lj64yf9qvqm43n5a",
  database: "zni3ag4i6twrjiqd"
});
const port = process.env.API_PORT || 3001;

conn.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

app.use(router);

// Insert client
router.post("/addclient", (req, res) => {
  const reqObj = req.body;
  console.log(reqObj);
  const customers = {
    datetoday: reqObj.datetoday,
    fullname: reqObj.fullname,
    homeaddress: reqObj.homeaddress,
    contactnumber: reqObj.contactnumber,
    work: reqObj.work,
    emailaddress: reqObj.emailaddress,
    findus: reqObj.findus,
    make: reqObj.make,
    model: reqObj.model,
    year: reqObj.year,
    rego: reqObj.rego,
    colour: reqObj.colour,
    firstrgdnz: reqObj.firstrgdnz,
    wofexpiry: reqObj.wofexpiry,
    odometer: reqObj.odometer,
    username: reqObj.username,
    password: reqObj.password,
    repeatpassword: reqObj.repeatpassword
  };
  const sql = "INSERT INTO jobsheet SET ?";
  const query = conn.query(sql, [customers], (error, results, fields) => {
    if (error) throw error;
  });
});

router.post("/booktime", (req, res) => {
  const reqObj = req.body;
  console.log(reqObj);
  const user = {
    title: reqObj.title,
    description: reqObj.description,
    startdate: reqObj.startdate,
    enddate: reqObj.enddate
  };
  const sql = "INSERT INTO bookonline SET ?";
  const query = conn.query(sql, [user], (error, results, fields) => {
    if (error) throw error;
    res.redirect("http://localhost:3000/bookonline");
  });
});

//on login
router.post("/login", (req, res, next) => {
  const reqObj = req.body;
  const username = reqObj.username;
  const password = reqObj.password;
  const sql = "SELECT * FROM jobsheet WHERE username =? AND password =?";
  console.log(req.body);

  const query = conn.query(
    sql,
    [username, password],
    (error, results, fields) => {
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
        res.send("XXXXXXXXXXXXXXXXXXX");
      }
    }
  );
});

// Select users

router.get("/selectCustomer", (req, res) => {
  const sql = "SELECT * FROM jobsheet";
  const query = conn.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

router.post("/searchcustomer", (req, res, next) => {
  const reqObj = req.body;
  const searchcustomer = reqObj.fullname;
  const sql = "SELECT * FROM jobsheet WHERE fullname = ?,";
  console.log(reqObj);

  const query = conn.query(sql, [searchcustomer], (error, results, fields) => {
    if (error) throw error;
    console.log("[Server.js] router.post(/searchcustomer", results);
  });
});

//Update Customer Details
router.post("/updatecustomer", (req, res) => {
  console.log(req.body);
  const reqObj = req.body;
  const fullname = reqObj.fullname;
  const homeaddress = reqObj.homeaddress;
  const work = reqObj.work;
  conn.query(
    "UPDATE jobsheet SET fullname = ?, homeaddress = ?, work = ? WHERE id = ?",
    [fullname, homeaddress, work, reqObj.id],
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

//Delete Customer
router.post("/deletecustomer", (req, res) => {
  const reqObj = req.body;
  const sql = "DELETE FROM jobsheet WHERE id = ";
  conn.query(sql + reqObj.id, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
