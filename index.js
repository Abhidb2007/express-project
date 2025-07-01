const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];
 
app.use(express.json());
app.get("/",function(req, res){
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys = johnkidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnkidneys[i].healthy) {
            numberOfHealthyKidneys=numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.post("/",function(req, res){
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({ healthy: isHealthy });
    res.json({
        msg:"Done!"
    })
})
app.listen(4000);