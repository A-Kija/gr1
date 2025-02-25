import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const port = 3001;
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

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

app.get(url + 'comments/:id/:type', (req, res) => {
    setTimeout(_ => {
        const id = req.params.id;
        const type = req.params.type;

        let sql = '';

        sql = `
            SELECT c.id, c.post_id AS postId, c.comment_id AS comId, c.content AS body, c.likes, a.name AS author
            FROM comments AS c
            INNER JOIN authors AS a
            ON c.author_id = a.id
        `;

        if (type === 'post') {
            sql += `WHERE c.post_id = ?`;
        } else if (type === 'comment') {
            sql += `WHERE c.comment_id = ?`;
        }

        con.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }

            result = result.map(comment => {
                comment.likes = JSON.parse(comment.likes);
                return comment;
            });

            res.json(result);
        });

    }, 2000);
});



app.listen(port, () => {
    console.log(`Breddit serveris darbui pasiruošęs ant ${port} porto!`);
});