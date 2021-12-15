const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))});
    
app.listen(port, (req, res) => {
        console.log('El servidor esta corriendo en el puerto ' + port)
    });