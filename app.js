const express = require('express');
const bodyParser = require('body-parser');
const { client, connectToDatabase, closeDatabaseConnection } = require('./server'); // Correct the import path
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000; // Use environment port or default to 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the database and create events table
connectToDatabase()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process if unable to connect to the database
  });

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Gracefully close the database connection when the server is shutting down
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await closeDatabaseConnection();
  process.exit(0);
});
