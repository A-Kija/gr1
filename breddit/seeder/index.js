import { users } from './users.js';
import mysql from 'mysql';


let sql;
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'breddit'
});

con.connect(_ => console.log('Prisijungta prie duomenų bazės!'));

con.query('DROP TABLE IF EXISTS comments;'), (err) => {
    if (err) throw err;
}
con.query('DROP TABLE IF EXISTS posts;'), (err) => {
    if (err) throw err;
}
con.query('DROP TABLE IF EXISTS authors;'), (err) => {
    if (err) throw err;
}

sql = `
    CREATE TABLE authors (
    id int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    avatar text NOT NULL,
    role enum('moderator','user','admin','bot','gold') NOT NULL,
    karma int(10) UNSIGNED NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

con.query(sql, (err) => {
    if (err) throw err;
    console.log('Lentelė authors sukurta!');
});

sql = `
    INSERT INTO authors
    (id, name, avatar, role, karma)
    VALUES ?
`;

con.query(sql, [users.map(user => [user.id, user.name, user.avatar, user.role, user.karma])], (err) => {
    if (err) throw err;
    console.log('Duomenys įterpti į lentelę authors!');
});







con.end(err => {
    if (err) throw err;
    console.log('Atsijungta nuo duomenų bazės!');
});