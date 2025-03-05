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

        sql += 'ORDER BY c.id DESC';

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

    setTimeout(_ => {

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
                    avatar: ''
                });
                return;
            }

            // TODO update token expiration time after each request

            result[0].avatar = 'data:image/svg+xml;base64,' + btoa(result[0].avatar);

            res.json(result[0]);
        });

    }, 2000);
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

app.post(url + 'logout', (req, res) => {

    setTimeout(_ => {

        const token = req.cookies.token || 'no-token';

        const sql = `
        DELETE FROM sessions
        WHERE token = ?
    `;

        con.query(sql, [token], (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.message });
                return;
            }

            res.clearCookie('token');
            res.json({
                name: 'Guest',
                role: 'guest',
                karma: 0,
                id: 0,
                email: '',
                avatar: ''
            });
        });

    }, 2000);

});

app.patch(url + ':id/update-votes/:type', (req, res) => {

    const { id, type } = req.params;
    const likes = JSON.stringify(req.body);

    let sql;

    if (type === 'post') {
        sql = `
            UPDATE posts
            SET likes = ?
            WHERE id = ?
        `;
    }

    if (type === 'com') {
        sql = `
            UPDATE comments
            SET likes = ?
            WHERE id = ?
        `;
    }

    con.query(sql, [likes, id], (err) => {
        if (err) {
            res.status(500).json({
                message: 'Viskas blogai'
            })
        }
        res.json({
            message: 'Viskas puiku'
        })
    })



});

app.post(url + 'create-comment/:id/:type', (req, res) => {

    const id = req.params.id || 0;
    const type = req.params.type;
    const postId = type === 'post' ? id : null;
    const commentId = type === 'com' ? id : null;
    const { content, author_id } = req.body;
    const likes = JSON.stringify({l:[],d:[]});

    const sql = `
        INSERT INTO comments
        (post_id, comment_id, content, author_id, likes)
        VALUES (?, ?, ?, ?, ?)
    `;

    con.query(sql, [postId, commentId, content, author_id, likes], (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                msg: 'Viskas blogai'
            });
        }

        const sql = `
            UPDATE posts
            SET comments = comments + 1
            WHERE id = ?
        `;
        con.query(sql, [id], (err) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    msg: 'Viskas blogai'
                });
            }
            res.status(201).json({
                msg: 'Viskas gerai'
            });
        });
    });
});



app.listen(port, () => {
    console.log(`Breddit serveris darbui pasiruošęs ant ${port} porto!`);
});