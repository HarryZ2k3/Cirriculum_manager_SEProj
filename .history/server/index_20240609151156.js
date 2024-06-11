const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const psql = require('pg');
const db = psql
const app = express();
const port = 5000;

// // PostgreSQL connection setup
const pool = new Pool({
    user: "postgres",
    password: 'root',
    host: '127.0.0.1',
    database: 'studentrecords',
    port: 5432,
})


app.post('/login', (req, res)=>{
    // We need to get variables sent from the form
    const sentloginUserName = req.body. LoginUserName
    const sentLoginPassword = req.body.LoginPassword
    // Lets create SQL statement to insert the user to the Database
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
    //We are going to enter these values through a variable
    const Values = [sentloginUserName, sentLoginPassword]
    // Query to execute the sql statement stated above
    db.query (SQL, Values, (err, results) =>{
    if(err){
    res.send({error: err})
    }
    if(results.length > 0)

    })


// Let us run the server. So its running,