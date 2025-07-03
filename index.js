const express = require("express");
const app =require();
app.get("/sum",function(req, res){
    const a = req.query.a;
    const b = req.quey.b;
    res.json({
        sum:a+b
    })
   
})
app.get("/multiply",function(req, res){
})

app.listen(3000);

