const express = require('express');
const CronJob = require('cron').CronJob;
const fs = require('fs');
const app = express()

//Update time every 8sec
const job = new CronJob('*/8 * * * * *', function () {
    fs.writeFileSync('./data.txt', `${new Date()}`, { flag: 'w' });

}, null, true, 'America/Los_Angeles');
job.start();

/**
 * Returns the time 
 * @param {any} req
 * @param {any} res
 * @returns {string}
 */
app.get('/', (req, res) => {
    let time = fs.readFileSync('./data.txt', 'utf8');
    res.send(`<currentTime>${time}!!</currentTime>`);
});


//server listing on 5000 port number
app.listen(5000, () => {
    console.log('Listing on 5000');
});
