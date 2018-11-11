require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.password,
    database:"STUDENTMANAGER2"
});

module.exports = con;