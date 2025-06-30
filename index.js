const express = require('express');
const app = express();
app.get("/",function(req,res){
    console.log(1/0);
    throw new Error(asdasdasd);
})