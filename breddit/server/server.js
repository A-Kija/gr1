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
            SELECT p.id, p.title, p.content, p.date, p.image_url, a.avatar, p.likes, p.comments 
            FROM posts AS p
            INNER JOIN authors AS a
            ON p.author_id = a.id
        `;
        

        con.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }

            result = result.map(post => {
                post.avatar = 'data:image/svg+xml;base64,' + btoa(post.avatar); // avataro svg kodas paverčiamas į base64
                post.likes = JSON.parse(post.likes);
                return post;
            });

            res.json(result);
        });

    }, 2000);
});





app.listen(port, () => {
    console.log(`Breddit serveris darbui pasiruošęs ant ${port} porto!`);
});