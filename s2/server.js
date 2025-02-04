const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

const port = 3333;
app.use(bodyParser.json());

app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

con.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Prisijungta prie duomenų bazės!');
});




app.listen(port, () => {
    console.log(`Vartotojų serveris darbui pasiruošęs ant ${port} porto!`);
});