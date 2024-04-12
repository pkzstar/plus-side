const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function fetchDataFromDatabase() {
  try {
    await client.connect();

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

    // Merge fetched data with existing eventsData without duplicates
    const mergedData = [...eventsData, ...data.filter(item => !eventsData.some(existing => existing.name === item.name))];
    return mergedData;
  } catch (error) {
    console.error('Error fetching data from database:', error);
    return eventsData; // Return existing data if fetching fails
  } finally {
    await client.end();
  }
}

module.exports = fetchDataFromDatabase;
