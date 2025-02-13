import { users } from './users.js';
import { posts } from './posts.js';
import mysql from 'mysql';
import { faker } from '@faker-js/faker';

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
const usersCount = users.length;

// add author_id to posts
posts.forEach(post => {
    post.author_id = users[rand(0, usersCount - 1)].id;
});

// add likes array to posts
posts.forEach(post => {
    post.likes = { l: [], d: [] };
    const likesCount = rand(0, usersCount);
    for (let i = 0; i < likesCount; i++) {
        let likeId;
        do {
            likeId = users[rand(0, usersCount - 1)].id;
        } while (post.likes.l.includes(likeId));
        post.likes.l.push(likeId);
    }
    users.forEach(user => {
        if (!post.likes.l.includes(user.id)) {
            rand(0, 2) || (post.likes.d.push(user.id));
        }
    });
});

// posts likes to JSON
posts.forEach(post => {
    post.likes = JSON.stringify(post.likes);
});


let lastCommentId = 1;
const comments = [];
const postCommentsCount = new Map();

// comments to posts and comments
posts.forEach(post => {
    postCommentsCount.set(post.id, 0);
    if (rand(0, 8)) {
        const commentsCount = rand(0, 10);
        for (let i = 0; i < commentsCount; i++) {
            const comment = {
                id: lastCommentId++,
                post_id: post.id,
                comment_id: null,
                author_id: users[rand(0, usersCount - 1)].id,
                content: faker.lorem.paragraph(),
            };
            comments.push(comment);
            postCommentsCount.set(post.id, postCommentsCount.get(post.id) + 1);
            if (rand(0, 8)) {
                const repliesCount = rand(0, 5);
                for (let j = 0; j < repliesCount; j++) {
                    const reply = {
                        id: lastCommentId++,
                        comment_id: comment.id,
                        post_id: null,
                        author_id: users[rand(0, usersCount - 1)].id,
                        content: faker.lorem.paragraph(),
                    };
                    comments.push(reply);
                    postCommentsCount.set(post.id, postCommentsCount.get(post.id) + 1);
                }
            }
        }
    }
});

// add likes array to comments
comments.forEach(comment => {
    comment.likes = { l: [], d: [] };
    const likesCount = rand(0, usersCount);
    for (let i = 0; i < likesCount; i++) {
        let likeId;
        do {
            likeId = users[rand(0, usersCount - 1)].id;
        } while (comment.likes.l.includes(likeId));
        comment.likes.l.push(likeId);
    }
    users.forEach(user => {
        if (!comment.likes.l.includes(user.id)) {
            rand(0, 2) || (comment.likes.d.push(user.id));
        }
    });
});

// comments likes to JSON
comments.forEach(comment => {
    comment.likes = JSON.stringify(comment.likes);
});

// add comments count to posts
posts.forEach(post => {
    post.comments = postCommentsCount.get(post.id);
});



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
    CREATE TABLE posts (
    id int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author_id int(10) UNSIGNED NOT NULL,
    content text NOT NULL,
    image_url varchar(100) NOT NULL,
    likes text NOT NULL,
    title varchar(255) NOT NULL,
    date date NOT NULL,
    comments int(10) UNSIGNED NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 `;

con.query(sql, (err) => {
    if (err) throw err;
    console.log('Lentelė posts sukurta!');
});

sql = `
    CREATE TABLE comments (
    id int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id int(10) UNSIGNED DEFAULT NULL,
    comment_id int(10) UNSIGNED DEFAULT NULL,
    content text NOT NULL,
    author_id int(10) UNSIGNED NOT NULL,
    likes text NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 `;

con.query(sql, (err) => {
    if (err) throw err;
    console.log('Lentelė comments sukurta!');
});

sql = `
    ALTER TABLE comments
    ADD CONSTRAINT comments_ibfk_1 FOREIGN KEY (author_id) REFERENCES authors (id),
    ADD CONSTRAINT comments_ibfk_2 FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE,
    ADD CONSTRAINT comments_ibfk_3 FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE;
`;

con.query(sql, (err) => {
    if (err) throw err;
    console.log('Sukurti raktai tarp lentelių!');
});

sql = `
    ALTER TABLE posts
    ADD CONSTRAINT posts_ibfk_1 FOREIGN KEY (author_id) REFERENCES authors (id);
`;

con.query(sql, (err) => {
    if (err) throw err;
    console.log('Sukurti raktai tarp lentelių!');
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


sql = `
    INSERT INTO posts
    (id, author_id, content, image_url, likes, title, date, comments)
    VALUES ?
`;

con.query(sql, [posts.map(post => [post.id, post.author_id, post.content, post.img_url, post.likes, post.title, post.date, post.comments])], (err) => {
    if (err) throw err;
    console.log('Duomenys įterpti į lentelę posts!');
});


sql = `
    INSERT INTO comments
    (id, post_id, comment_id, content, author_id, likes)
    VALUES ?
`;

con.query(sql, [comments.map(comment => [comment.id, comment.post_id, comment.comment_id, comment.content, comment.author_id, comment.likes])], (err) => {
    if (err) throw err;
    console.log('Duomenys įterpti į lentelę comments!');
});



con.end(err => {
    if (err) throw err;
    console.log('Atsijungta nuo duomenų bazės!');
});