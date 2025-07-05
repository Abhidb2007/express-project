const express = require('express');
const app = express();
let requestcount = 0;
function countRequests(req, res, next){
    requestcount++;
    console.log('Total number of requests = ${requestCount}');
    next();
}
app.use(countRequests);
app.get('/requestCount', (req, res){
    res.send('Total number of requests:requestCount');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
