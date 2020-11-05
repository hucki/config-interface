const express = require('express');
const router = require('./routes/router');
const mongoose = require('./models/index');
const app = express();
const port = 3001;

app.use(express.json()); // parse incoming Data
app.use(router); // connect router

mongoose.connection.once('open', () => {
  console.log('DB connection established 🚀'); //eslint-disable-oneline no-console
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} 🍍`) // eslint-disable-line no-console
})