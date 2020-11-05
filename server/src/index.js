const express = require('express');
const router = require('./routes/router');
const app = express();
const port = 3001;

// TODO: parse input
app.use(router);
// TODO: connect DB

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`) // eslint-disable-line no-console
})