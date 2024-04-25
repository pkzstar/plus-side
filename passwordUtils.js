//passwordUtils.js

require('dotenv').config();
const argon2 = require('argon2');
const crypto = require('crypto');

const password = process.env.Form_Pass;

// Generate a random salt
crypto.randomBytes(32, async (err, salt) => {
  if (err) throw err;

  try {
    // Hash the password using Argon2 with the generated salt
    const hashedPassword = await argon2.hash(password, { salt });
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
});
