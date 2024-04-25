fetch('/events')
  .then(response => response.json())
  .then(data => {
    console.log('Events Table Data:');
    console.table(data); // Display the data in a table format in the browser's console
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
