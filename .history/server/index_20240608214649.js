const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'root',
  port: 5432,
});

// Example route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});