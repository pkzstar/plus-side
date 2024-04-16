const http = require('http');
const app = require('./server');

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '')));

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
    // Validate date format here if needed before inserting into the database

    // Convert date string to date object if needed
    // const dateObject = new Date(upcomingDate);

    // Use the dateObject in the values array instead of upcomingDate
    // const values = [upcomingTitle, dateObject, upcomingLocation, upcomingUrl, upcomingImg, upcomingDescription];

    const http = require('http'); // Import the native HTTP module
    const options = {
      hostname: 'localhost', // Your server's hostname
      port: port, // Your server's port
      path: '/submitEvent',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const request = http.request(options, (response) => {
      console.log(`statusCode: ${response.statusCode}`);

      response.on('data', (data) => {
        console.log(data.toString());
        res.status(200).send('Data saved successfully');
      });
    });

    request.on('error', (error) => {
      console.error(error);
      res.status(500).send('Error saving data');
    });

    request.write(JSON.stringify({ ...req.body })); // Send the request body
    request.end();

  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error saving data');
  }
});

app.get('/submitEvent', async (req, res) => {
  try {
    const http = require('http'); // Import the native HTTP module
    const options = {
      hostname: 'localhost', // Your server's hostname
      port: port, // Your server's port
      path: '/submitEvent',
      method: 'GET',
    };

    const request = http.request(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const parsedData = JSON.parse(data);
        res.json(parsedData);
      });
    });

    request.on('error', (error) => {
      console.error(error);
      res.status(500).json({ error: 'Error fetching data from database' });
    });

    request.end();

  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Error fetching data from database' });
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
