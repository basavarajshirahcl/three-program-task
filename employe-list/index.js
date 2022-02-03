const express = require('express');
const app = express()
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json(), express.urlencoded({ extended: true }));

/**
 * Redirect to dashboard
 * @param {any} req
 * @param {any} res
 * @returns {null}
 */
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {});
});

/**
 * Add employee to file 
 * @param {any} req
 * @param {any} res
 * @returns {object} success or error
 */
app.post('/add-employe', (req, res) => {
    try {
        if (fs.existsSync('./../data.json')) {
            //file exists
            let json = fs.readFileSync('./../data.json', 'utf8');
            json = JSON.parse(json);
            json.employees.push({
                id: req.body.id,
                name: req.body.name,
                age: req.body.age,
            });
            json = JSON.stringify(json);
            fs.writeFileSync('./../data.json', json, { flag: 'wx' });
            res.json({ code: 200, data: null, message: "employee added" });
        } else {
            res.json({ code: 400, data: null, message: "File not found." });
        }

    } catch (err) {
        res.json({ code: 400, data: null, error: err, message: "Something went wrong" });
    }
});

/**
 * List employee from file 
 * @param {any} req
 * @param {any} res
 * @returns {object} success or error
 */
app.get("/", (req, res) => {
    let xml = fs.readFileSync('./../dataxml.xml', 'utf8');
    console.log(xml)
    res.send(xml)
})

app.get('/', (req, res) => {
    res.send(`${new Date()} first`);
});

app.listen(5001, () => {
    console.log('Listing on 5001');
});
