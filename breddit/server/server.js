import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

import md5 from 'md5';
import { v4 as uuidv4 } from 'uuid';
import cookieParser from 'cookie-parser';

const app = express();

const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.json());

app.use(cookieParser());



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

app.get(url + 'auth', (req, res) => {
    
    const token = req.cookies.token || 'no-token';

    const sql = `
        SELECT a.id, a.name, a.avatar, a.role, a.karma, a.email
        FROM authors AS a
        INNER JOIN sessions AS s
        ON a.id = s.author_id
        WHERE s.token = ?
        AND s.expires > NOW()
    `;

    con.query(sql, [token], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
            return;
        }

        if (result.length === 0) {
            res.status(200).json({
                name: 'Guest',
                role: 'guest',
                karma: 0,
                id: 0,
                email: '',
                avatar: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2v-2zm0-4h2v3h-2v-3z"/></svg>')
            });
            return;
        }

        // TODO update token expiration time after each request

        result[0].avatar = 'data:image/svg+xml;base64,' + btoa(result[0].avatar);

        res.json(result[0]);
    });
});


app.post(url + 'login', (req, res) => {

    const { name, password } = req.body;

    let sql = `
        SELECT id, name, avatar, role, karma, email
        FROM authors
        WHERE name = ?
        AND password = ?
    `;

    con.query(sql, [name, md5(password)], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
            return;
        }

        if (result.length === 0) {
            res.status(404).json({ error: 'Vartotojas nerastas' });
            return;
        }
        result[0].avatar = 'data:image/svg+xml;base64,' + btoa(result[0].avatar);

        const token = md5(uuidv4());
        res.cookie('token', token, { httpOnly: true });

        sql = `
            INSERT INTO sessions (token, author_id, expires)
            VALUES (?, ?, ?)
        `;

        con.query(sql, [token, result[0].id, new Date(Date.now() + 1000 * 60 * 60 * 24)], (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }
        });

        res.json({
            success: true,
            user: result[0]
        });
    });
});



app.listen(port, () => {
    console.log(`Breddit serveris darbui pasiruošęs ant ${port} porto!`);
});