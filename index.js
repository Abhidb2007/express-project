const express = require('express');
const app = express();

let requestCount = 0;

// Middleware to count every request
function countRequests(req, res, next) {
    requestCount += 1;
    console.log(`Total Requests = ${requestCount}`);
    next();
}

app.use(countRequests); // Apply middleware to all requests

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Endpoint to get total request count
app.get('/request-count', (req, res) => {
    res.json({ totalRequests: requestCount });
});

app.listen(3000)
