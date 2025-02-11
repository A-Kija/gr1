const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static('public'));
app.use(cors());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'images'
});

con.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Prisijungta prie duomenų bazės!');
});

app.post('/api/images', (req, res) => {

    let image = req.body.image; // base64 encoded image

    let imageType = image.split(';')[0].split('/')[1];

    // remove header
    image = image.replace(/^data:image\/\w+;base64,/, '');

    // random image name
    let imageName = Math.random().toString(36).substring(7) + '.' + imageType;

    // create buffer
    let buffer = new Buffer(image, 'base64');

    // save image with fs sync
    fs.writeFileSync('public/' + imageName, buffer);


    // save image to db
    let sql = `
    INSERT INTO imgs
    (url)
    VALUES ('${imageName}')`;

    con.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('ok');
    });

});



const port = 3333;
app.listen(port, () => {
    console.log(`Paveiksliukų serveris darbui pasiruošęs ant ${port} porto!`);
});