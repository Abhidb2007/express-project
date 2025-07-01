const express = require('express');
const app =express();
app.get("/",function(req,res){
    throw new Error("This is an error");
})
app.listen(3000);