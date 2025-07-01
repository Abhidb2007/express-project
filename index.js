const express = require('express');
const app = express();

 const users=[{
    name:"jhon",
    kidneys:[{
        healthy:false
    }]
 }];
 
 app.get("/",function(req, res){
    const jhonkidneys = users[0].kidneys;
    console.log(jhonkidneys);
 })

 app.listen(3000);