const express = require('express');
const fs = require("fs");
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`${new Date()} Second`);
});

app.get("/search/:id", (req, res) => {
    try {
        if (fs.existsSync('./../data.json')) {
            let json = fs.readFileSync('./../data.json', 'utf8');
            json = JSON.parse(json);
            if (json.employees.find(x => x.id == req.params.id)) {
                return res.send('employee found.')
            } else {
                return res.send('employee not found.')
            }
        } else {
            return res.send('Employee not found.');
        }
    } catch (err) {
        return res.send('Unable to find employee.');
    }
})
app.get("/list", (req, res) => {
    try {
        if (fs.existsSync('./../data.json')) {
            let json = fs.readFileSync('./../data.json', 'utf8');
            json = JSON.parse(json);
            return res.send(json);
        } else {
            return res.send('Employee not found.');
        }
    } catch (err) {
        return res.send('Unable to find employee.');
    }
})

app.listen(5002, () => {
    console.log('Listing on 5002');
});