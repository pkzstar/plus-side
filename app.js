const express = require('express');
const bodyParser = require('body-parser');
const { client, connectToDatabase, closeDatabaseConnection } = require('./db'); // Import connectToDatabase and closeDatabaseConnection
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the database and create events table
connectToDatabase().catch(error => console.error('Error:', error));


app.get('/', async (req, res) => {
  console.log("hello");
  res.status(200).send('Data saved successfully');
  // const { upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription } = req.body;

  // const query = 'INSERT INTO events (title, date, location, url, image, description) VALUES ($1, $2, $3, $4, $5, $6)';
  // const values = [upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription];

  // try {
  //   const result = await client.query(query, values);
  //   console.log('Data saved successfully:', result);
  //   res.status(200).send('Data saved successfully');
  // } catch (err) {
  //   console.error('Error executing query:', err);
  //   res.status(500).send('Error saving data');
  // }
});
app.post('/submitEvent', async (req, res) => {
  console.log("hello");
  res.status(200).send('Data saved successfully');
  // const { upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription } = req.body;

  // const query = 'INSERT INTO events (title, date, location, url, image, description) VALUES ($1, $2, $3, $4, $5, $6)';
  // const values = [upcomingTitle, upcomingDate, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription];

  // try {
  //   const result = await client.query(query, values);
  //   console.log('Data saved successfully:', result);
  //   res.status(200).send('Data saved successfully');
  // } catch (err) {
  //   console.error('Error executing query:', err);
  //   res.status(500).send('Error saving data');
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Close the database connection when the server is shutting down
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await closeDatabaseConnection();
  process.exit(0);
});
