import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const port = 3001;
app.use(bodyParser.json());

app.use(cors());

const url = '/api/v1/';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'breddit'
});

app.get(url + 'posts', (req, res) => {

    setTimeout(_ => {

        const sql = `
            SELECT * FROM posts
        `;

        con.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }

            res.json(result);
        });

    }, 2000);
});





app.listen(port, () => {
    console.log(`Breddit serveris darbui pasiruošęs ant ${port} porto!`);
});