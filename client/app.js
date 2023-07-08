const express = require('express')
const pug = require('pug');
const PORT = 3002
const path = require('path');

const app = express()

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))

app.listen(PORT, () => console.log('Server start on Port: ' + PORT))
