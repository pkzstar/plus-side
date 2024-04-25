//passwordUtils.js

require('dotenv').config();

const argon2 = require('argon2');
const crypto = require('crypto');

const password = process.env.Form_Pass;


// Generate a random salt
crypto.randomBytes(32, (err, salt) => {
    if (err) throw err;

    argon2.hash(password, { salt })
        .then(hashedPassword => {
            console.log('Hashed Password:', hashedPassword);
        })
        .catch(error => {
            console.error('Error hashing password:', error);
        });
});