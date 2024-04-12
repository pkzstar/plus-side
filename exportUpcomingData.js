const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const axios = require('axios'); // Import Axios

require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

// Route to fetch data from the database
router.get('/submitEvent', async (req, res) => {
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

// Route to handle form submission and insert data into the database
router.post('/submitEvent', async (req, res) => {
  const { upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription } = req.body;

  const query = 'INSERT INTO events (title, date, location, url, image, description) VALUES ($1, $2, $3, $4, $5, $6)';
  const values = [upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription];

  try {
    const result = await client.query(query, values);
    console.log('Data saved successfully:', result.rows);
    res.status(200).send('Data saved successfully');
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error saving data');
  }
});

module.exports = router;
