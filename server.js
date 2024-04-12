const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database!');
    await createEventsTable(); // Call the function to create the events table
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

async function createEventsTable() {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date VARCHAR(255),
        location VARCHAR(255),
        url VARCHAR(255),
        image VARCHAR(255),
        description TEXT
      )
    `);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

async function closeDatabaseConnection() {
  try {
    await client.end();
    console.log('Disconnected from the database.');
  } catch (error) {
    console.error('Error closing database connection:', error);
  }
}

module.exports = { client, connectToDatabase, closeDatabaseConnection };
