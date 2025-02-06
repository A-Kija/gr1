const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const md5 = require('md5'); // senas būdas, dabar naudojamas bcrypt
// cookie parser
const cookieParser = require('cookie-parser');

const port = 3333;
app.use(bodyParser.json());

app.use(cookieParser());

app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
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


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = `
    SELECT * 
    FROM users 
    WHERE name = ? AND password = ?
    `;
    let user;
    con.query(sql, [username, md5(password)], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            res.json({
                success: false,
                message: {
                    text: 'Neteisingi prisijungimo duomenys!',
                    color: 'crimson'
                }
            });
        } else {
            user = result[0];
            // 1 random session token
            const token = md5(Math.random());
            // 2 save token to db
            const sql = `
                INSERT INTO sessions
                (user_id, code)
                VALUES (?, ?)
            `;
            con.query(sql, [result[0].id, token], (err, result) => {
                if (err) {
                    throw err;
                }

                // 3 save token to client cookie
                res.cookie('token', token, {
                    maxAge: 1000 * 60 * 60 * 24 * 7
                });

                // 4 get user from db result
                delete user.password;

                // 5 response
                res.json({
                    success: true,
                    message: {
                        text: 'Prisijungta sėkmingai!',
                        color: 'green'
                    },
                    user
                });
            });
        }
    });
});

app.post('/logout', (req, res) => {

    setTimeout(_ => {

        const token = req.cookies.token || '';
        const sql = `
    DELETE 
    FROM sessions 
    WHERE code = ?
    `;
        con.query(sql, [token], (err, result) => {
            if (err) {
                throw err;
            }
            res.clearCookie('token');
            res.json({
                success: true
            });
        });

    }, 2000);


});

app.get('/isauth', (req, res) => {

    setTimeout(_ => {

        const token = req.cookies.token || '';
        const sql = `
        SELECT * 
        FROM sessions 
        WHERE code = ?
    `;
        con.query(sql, [token], (err, result) => {
            if (err) {
                throw err;
            }
            if (result.length === 0) {
                res.json({
                    auth: false
                });
            } else {
                // get user from db
                const sql = `
                SELECT *
                FROM users
                WHERE id = ?
                `;
                con.query(sql, [result[0].user_id], (err, result) => {
                    if (err) {
                        throw err;
                    }
                    delete result[0].password;
                    res.json({
                        auth: true,
                        user: result[0]
                    });
                });
            }
        });

    }, 2000);
});




app.listen(port, () => {
    console.log(`Vartotojų serveris darbui pasiruošęs ant ${port} porto!`);
});