const express = require("express");
const app = express();
let requestCount = 0;

function requestIncreaser(req, res) {
    requestCount +1;
    if (req.headers.cookie==="google"){
        next()
    }
    else{
        console.log("Total number of requests= " +requestCount);
        res.json({
            message:"I ended the request"
        })
    }
}
function realSumHandler(req,res){
    console.log("control reached the real Handler")
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);
    };
app.get("/admin",realSumHandler);
app.use(requestIncreaser);
app.get("/sum",requestIncreaser,realSumHandler);


app.listen(3000)

