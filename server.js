require('dotenv').config(); // Load environment variables from .env file
const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  connectionString: "postgres://goqxwbhsszkhpi:880c9a5111fdfc99424bad12ebf268432f4160f748c884e5cfc69533799af86c@ec2-107-21-67-46.compute-1.amazonaws.com:5432/dfe9ai4aemlktt",
  ssl: {
    rejectUnauthorized: false // Only use this in development, not in production
  },
  user: 'goqxwbhsszkhpi', 
  password: '880c9a5111fdfc99424bad12ebf268432f4160f748c884e5cfc69533799af86c'
  });


// Connect to the database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database!');
    // Add your database queries or operations here
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await client.end();
    console.log('Disconnected from the database.');
  }
}

connectToDatabase();
