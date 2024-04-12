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
    await deleteEmptyRows(); // Call the function to delete rows with 'EMPTY'
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

async function createEventsTable() {
  try {
    // Check if the column type needs to be changed
    const checkColumnTypeQuery = `
      SELECT data_type FROM information_schema.columns
      WHERE table_name = 'events' AND column_name = 'date'
    `;
    const { rows } = await client.query(checkColumnTypeQuery);

    if (rows.length > 0 && rows[0].data_type === 'date') {
      // Alter the column type to VARCHAR(255)
      const alterColumnTypeQuery = `
        ALTER TABLE events
        ALTER COLUMN date TYPE VARCHAR(255)
      `;
      await client.query(alterColumnTypeQuery);
      console.log('Column type updated successfully.');
    } else {
      console.log('Column type is already VARCHAR(255). No changes needed.');
    }
  } catch (error) {
    console.error('Error altering column type:', error);
  }
}


async function deleteEmptyRows() {
  try {
    const deleteQuery = `
      DELETE FROM events
      WHERE title = 'EMPTY'
    `;
    const result = await client.query(deleteQuery);
    console.log(`${result.rowCount} row(s) deleted.`);
  } catch (error) {
    console.error('Error deleting rows:', error);
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
