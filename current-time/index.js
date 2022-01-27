const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send(<currentTime>${new Date()}</currentTime>);
});

app.listen(5000, () => {
    console.log('Listing on 5000');
});