const express = require('express');
const bodyParser = require('body-parser');
const { client, connectToDatabase, closeDatabaseConnection } = require('./server');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

// Connect to the database and create events table
connectToDatabase()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

// Handle form submission using AJAX/Fetch API
app.post('/submitEvent', async (req, res) => {
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

// Gracefully close the database connection when the server is shutting down
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await closeDatabaseConnection();
  process.exit(0);
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server; // Export the server for testing or other purposes
