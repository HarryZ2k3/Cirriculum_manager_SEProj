// const express = require('express');
// const cors = require('cors');
// const Pool = require('pg').Pool;
// const app = express();
// const port = 3010;

// app.use(express.json());

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })

// // // PostgreSQL connection setup
// const db = new Pool({
//     user: "postgres",
//     password: 'root',
//     host: '127.0.0.1',
//     database: 'studentrecords',
//     port: 5432,
// })

// app.post('/login', (req, res)=> {
//     // We need to get variables sent from the form
//     const sentloginUserName = req.body. LoginUserName
//     const sentLoginPassword = req.body.LoginPassword
//     // Lets create SQL statement to insert the user to the Database
//     const SQL = 'SELECT * FROM ACCOUNT.AdminAccounts WHERE Username = ? && Password = ?'
//     //We are going to enter these values through a variable
//     const Values = [sentloginUserName, sentLoginPassword]
//     // Query to execute the sql statement stated above
//     db.query (SQL, Values, (err, results) =>{
//         if(err){
//             res.send({error: err})
//         }
//         if(results.length > 0){
//         }

//     })
//     }
// )

// app.post('/register', (req, res)=>{
//     // We need to get variables sent from the form
//     const sentEmail = req.body.Email
//     const sentUserName = req.body.UserName
//     const sentPassword = req.body.Password
//     // Lets create SQL statemeht to insert the user to the Database table
//     const SQL = 'INSERT INTO ACCOUNT.AdminAccounts (AdminID, Username, Password) VALUES (?,?,?)' 
//     //we are going to enter these values through a variable
//     const Values = [sentEmail, sentUserName, sentPassword]
//     // Query to execute the sql statement stated above
//     db. query(SQL, Values, (err, results) =>{
//         if(err){
//             res. send (err)
//         }
//         else{
//             console. log('User inserted successfully!')
//             res.send({message: 'User added!'})
//         }
//     })
// })


const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3012;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// PostgreSQL connection setup
const db = new Pool({
    user: "postgres",
    password: 'root',
    host: '127.0.0.1',
    database: 'studentrecords',
    port: 5432,
});

app.post('/login', async (req, res) => {
    try {
        const { LoginUserName: sentloginUserName, LoginPassword: sentLoginPassword } = req.body;
        const SQL = 'SELECT * FROM ACCOUNT.AdminAccounts WHERE Username = $1 AND Password = $2';
        const Values = [sentloginUserName, sentLoginPassword];
        const result = await db.query(SQL, Values);

        if (result.rows.length > 0) {
            res.send({ message: 'Login successful', user: result.rows[0] });
        } else {
            res.status(401).send({ error: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { Email: sentEmail, UserName: sentUserName, Password: sentPassword } = req.body;
        const SQL = 'INSERT INTO ACCOUNT.AdminAccounts (AdminID, Username, Password) VALUES (21, $2, $3)';
        const Values = [sentEmail, sentUserName, sentPassword];
        await db.query(SQL, Values);

        console.log('User inserted successfully!');
        res.send({ message: 'User added!' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// Temporary test routes to ensure server is running
app.get('/login', (req, res) => {
    res.send('This is the GET /login route. Use POST to test login.');
});

app.get('/register', (req, res) => {
    res.send('This is the GET /register route. Use POST to test register.');
});