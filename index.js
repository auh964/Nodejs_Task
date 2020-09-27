const mysql = require('mysql');
const express = require('express');
const router = require('./router/restApi');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());




// connection to database
const sequelize = new Sequelize('mydbs', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});


// test connection
try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// connection from mysql

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Abdabd2016*",
//     database: 'mydbs'
//   });


   app.use('/users',router)
   app.listen(8000, () => console.log('Listening on port 8000...'));