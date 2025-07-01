const express = require('express');  // Step 1: import express
const app = express();               // Step 2: create app instance

app.use(express.json());            // Optional: for JSON request handling

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server on port 4000
app.listen(4000, () => {
  console.log('hi there');
});
