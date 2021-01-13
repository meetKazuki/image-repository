const { argon2i } = require('argon2-ffi');
const { config } = require('dotenv');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

config();

async function hashPassword(password) {
  const salt = crypto.randomBytes(+process.env.SALT_ROUNDS);
  const hashed = await argon2i.hash(password, salt);
  return hashed;
}

function verifyPassword(encodedPassword, password) {
  return argon2i.verify(encodedPassword, password);
}

function generateToken({ id }, duration = '24h') {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: duration });
}

module.exports = {
  generateToken,
  hashPassword,
  verifyPassword,
};
