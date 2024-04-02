const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'plus-side'; // Change this to your database name

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define a route to handle form submission
app.post('/submit-event', (req, res) => {
  console.log('Received POST request at /submit-event');
  console.log('Form Data:', req.body);
  const eventData = {
    title: req.body.upcomingTitle,
    date: req.body.upcomingDate,
    location: req.body.upcomingLocation,
    url: req.body.upcomingUrl,
    image: req.body.upcomingImg,
    description: req.body.upcomingDescription
  };

  // Connect to MongoDB
  MongoClient.connect(mongoURL, function(err, client) {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('events');

    // Insert the eventData into the 'events' collection
    collection.insertOne(eventData, (err, result) => {
      if (err) {
        console.error('Error inserting document:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      console.log('Event submitted successfully:', result.insertedId);
      res.send('Event submitted successfully!');
    });
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Client-side JavaScript for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Serialize form data
    const formData = {};
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });

    // Send form data to the server via AJAX
    fetch('/submit-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Form data submitted successfully:', data);
      // Optionally, reset the form after successful submission
      form.reset();
    })
    .catch(error => {
      console.error('Error submitting form data:', error);
    });
  });
});
