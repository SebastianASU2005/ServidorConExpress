// config.js
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const config = {
    port: process.env.PORT || 3000,
  };
  
  module.exports = { config };