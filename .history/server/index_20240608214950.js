const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // PostgreSQL connection setup
// const pool = new Pool({
//     user: "postgres",
//     password: 'root',
//     host: '127.0.0.1',
//     database: 'studentrecords',
//     port: 5432,
// });

// // Example route
// app.get('/', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.send(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});