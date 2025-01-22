const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

const port = 3333;
app.use(bodyParser.json());

app.use(cors());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cosmos'
});

app.get('/api/planet', (req, res) => {


    setTimeout(_ => {

        const sql = `
        SELECT * FROM planets
    `;

        con.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }

            result.forEach(planet => {
                planet.satellites = JSON.parse(planet.satellites);
            });

            res.json(result);
        });

    }, 2000);


});

app.post('/api/planet', (req, res) => {

    setTimeout(_ => {

        const { name, state, size, satellites } = req.body;

        if (!size) {
            res.status(400).json({ error: 'Planet size is required' });
            return;
        }

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

    }, 4000);


});

app.put('/api/planet/:id', (req, res) => {
    
    setTimeout(_ => {

        const { name, state, size, satellites } = req.body;
        const { id } = req.params;

        if (!size) {
            res.status(400).json({ error: 'Planet size is required' });
            return;
        }

        const sql = `
        UPDATE planets
        SET name = ?, state = ?, size = ?, satellites = ?
        WHERE id = ?
    `;

        con.query(sql, [name, state, size, JSON.stringify(satellites), id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Planet not found' });
                return;
            }

            res.json({ id });
        });

    }, 2000);

});

app.delete('/api/planet/:id', (req, res) => {

    setTimeout(_ => {
        
        const { id } = req.params;

        const sql = `
        DELETE FROM planets
        WHERE id = ?
    `;

        con.query(sql, [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Planet not found' });
                return;
            }

            res.json({ id });
        });

    }, 3000);

});



app.listen(port, () => {
    console.log(`Planetų serveris darbui pasiruošęs ant ${port} porto!`);
});