// displayEvents.js

const queries = [
  "SELECT * FROM events WHERE Title IS NOT NULL AND Title <> ''",
  "SELECT * FROM events WHERE Date IS NOT NULL AND TRIM(Date) <> ''"
];

fetch('/queryEvents', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ queries })
})
.then(response => response.json())
.then(data => {
  console.log('Events Table Data:');
  console.table(data); // Display the data in a table format in the browser's console
})
.catch(error => {
  console.error('Error fetching data:', error);
});
