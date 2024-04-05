const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// express will prioritize index.html at the GET / route
// if it exists in this directory, even if another 
// definition exists
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.send("hello, world!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
