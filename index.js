const express = require("express");
const app = express();
let requestCount = 0;
app.get("/sum",function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer: a + b,
    });
   
});
app.get("/multiply",function(req, res){
    const a = parseInt(req.query,a);
    const b = parseInt(req.query.b);
    res. json({
        answer:a*b,
    });
});

app.listen(3000);

