const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`) // eslint-disable-line no-console
})