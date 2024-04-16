const express = require('express');
const bodyParser = require('body-parser');
const { client, connectToDatabase, closeDatabaseConnection } = require('./db'); // Assuming your database handling functions are in a file called db.js
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

connectToDatabase()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

app.post('/submitEvent', async (req, res) => {
  const { name, date, location, imageUrl, link, rankImg } = req.body;

  try {
    const query = 'INSERT INTO events (name, date, location, imageUrl, link, rankImg) VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [name, date, location, imageUrl, link, rankImg];

    await client.query(query, values);
    res.status(200).send('Event added successfully');
  } catch (error) {
    console.error('Error adding event to the database:', error);
    res.status(500).send('Error adding event');
  }
});

app.get('/events', async (req, res) => {
  try {
    const query = 'SELECT * FROM events';
    const { rows } = await client.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching events from the database:', error);
    res.status(500).send('Error fetching events');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await closeDatabaseConnection();
  process.exit(0);
});

module.exports = app;
