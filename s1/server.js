const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const port = 3333;
app.use(bodyParser.json());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cosmos'
});

app.post('/api/planet', (req, res) => {

    const { name, state, size, satellites } = req.body;

    const sql = `
        INSERT INTO planets 
        (name, state, size, satellites)
        VALUES (?, ?, ?, ?)
    `;

    con.query(sql, [name, state, size, JSON.stringify(satellites)], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ id: result.insertId });
    });


});



app.listen(port, () => {
    console.log(`Planetų serveris darbui pasiruošęs ant ${port} porto!`);
});