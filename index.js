const express = require('express');
const app = express();
app.use(bodyParser.json());
app.post("/sum",function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        sum :a+b
    });
});
    app.listen(3000);

    const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 👈 This allows all origins by default

app.get('/data', (req, res) => {
    res.json({ message: "CORS is working!" });
});
