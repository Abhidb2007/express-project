const express = require('express');
const app = express();

app.get("/", function (req, res) {
    try {
        // Simulated error
        throw new Error("This is an error");
    } catch (err) {
        console.error("Caught Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log(jhonkidneys)
});
