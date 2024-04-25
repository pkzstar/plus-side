const { client } = require('./server'); // Import the client from server.js

async function displayEvents() {
  try {
    await client.connect(); // Ensure the client is connected to the database
    const query = 'SELECT * FROM events'; // Query to select all data from the events table
    const result = await client.query(query);
    console.log('Events Table Data:');
    console.table(result.rows); // Display the data in a table format
  } catch (err) {
    console.error('Error fetching events data:', err);
  } finally {
    await client.end(); // Close the database connection
  }
}

displayEvents(); // Call the function to display events table data
