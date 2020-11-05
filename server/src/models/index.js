const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_URI = process.env.DB_URI;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`${DB_URI}:${DB_PORT}/${DB_NAME}`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose;