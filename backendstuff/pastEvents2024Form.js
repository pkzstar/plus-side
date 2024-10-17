//pastEvents2024Form.js

const express = require ('express')
const app = express()
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const pastEventsSchema = require('./pastEventsSchema2024');

app.use(express.urlencoded({ extended: true }));


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=> app.listen(3000), console.log('connection successful'))

    .catch((err) => console.log(err));

    app.use(express.static('public'))
    app.use(morgan('dev'));


    app.post('/past-events/2024', (req, res) => {
        console.log('POST request received');

        const NewEvent = new pastSchema(req.body);
        
        NewEvent.save() // Save the instance
        .then((result) => {
            console.log('success');
            res.status(201).send(result); // Respond with success
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err); // Respond with error
        });
    });
    