const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new Client({
  // Your database configuration
});

client.connect();

// Create events table if not exists
client.query(`
  CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE,
    location VARCHAR(255),
    url VARCHAR(255),
    image VARCHAR(255),
    description TEXT
  )
`, (err, result) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }
});

app.post('/', (req, res) => {
  const { upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription } = req.body;

  const query = 'INSERT INTO events (title, date, location, url, image, description) VALUES ($1, $2, $3, $4, $5, $6)';
  const values = [upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription];

  client.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully:', result);
      res.status(200).send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
