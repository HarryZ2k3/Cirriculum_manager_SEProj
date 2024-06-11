
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3011;

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
        // We need to get variables sent from the form
        const { LoginUserName: sentloginUserName, LoginPassword: sentLoginPassword } = req.body;
        
        // Let's create SQL statement to select the user from the Database
        const SQL = 'SELECT * FROM ACCOUNT.AdminAccounts WHERE Username = $1 AND Password = $2';
        const Values = [sentloginUserName, sentLoginPassword];

        // Query to execute the SQL statement
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
        // We need to get variables sent from the form
        const { Email: sentEmail, UserName: sentUserName, Password: sentPassword } = req.body;

        // Let's create SQL statement to insert the user into the Database table
        const SQL = 'INSERT INTO ACCOUNT.AdminAccounts (AdminID, Username, Password) VALUES ($1, $2, $3)';
        const Values = [sentEmail, sentUserName, sentPassword];

        // Query to execute the SQL statement
        await db.query(SQL, Values);
        
        console.log('User inserted successfully!');
        res.send({ message: 'User added!' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});
