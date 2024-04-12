const express = require('express');
const router = express.Router();
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// Connect to the database
client.connect();

// Route to fetch data from the database
router.get('/fetchData', async (req, res) => {
  try {
    const query = 'SELECT * FROM events'; // Assuming 'events' is the name of your table
    const result = await client.query(query);
    const data = result.rows.map(row => ({
      name: row.title,
      date: row.date,
      location: row.location,
      imageUrl: row.image,
      link: row.url,
      rankImg: false // You can modify this based on your requirements
    }));
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Error fetching data from database' });
  }
});

module.exports = router;
