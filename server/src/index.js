const express = require('express');
const router = require('./routes/router');
const app = express();
const port = 3001;

// parse input
app.use(router);
// serve DB

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`) // eslint-disable-line no-console
})