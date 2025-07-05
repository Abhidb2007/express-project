const express = require('express');
const app = express();
app.use(app.json());
app.post("/sum",function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        sum :a+b
    });
});
    app.listen(3000);