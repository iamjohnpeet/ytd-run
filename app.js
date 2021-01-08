const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));

app.listen('3000');
console.log('working on 3000');

app.get('/', function (req, res) {
    res.render('index', { title: 'Year to date run stats' })
})
