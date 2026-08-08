const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    console.log("Location is " + __dirname);
    res.render('home.ejs');
})

app.get('/about', (req, res) => {
    res.send('This is about page');
})

app.get('/rolldice', (req, res) => {
    // console.log(Math.floor(Math.random()*6)+1);
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log("Dice value is " + diceValue);  
    res.render('rolldice.ejs', { diceValue });
})