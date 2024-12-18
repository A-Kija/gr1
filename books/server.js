const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars = require('handlebars');
const md5 = require('md5');
const multer = require('multer');
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
const app = express();

handlebars.registerHelper('isdefined', function (value) {
  return value !== undefined;
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    const randomPrefix = uuidv4();
    const extension = file.originalname.split('.').pop();
    const filename = `${randomPrefix}.${extension}`;
    cb(null, filename);
  }
});


const port = 80;
const domain = 'http://books.final/';
const top = fs.readFileSync('./html/top.html', 'utf8');
const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
const messages = {
  create_success: { msg: 'Knyga sėkmingai sukurta!', type: 'success' },
  edit_success: { msg: 'Knyga sėkmingai atnaujinta!', type: 'success' },
  delete_success: { msg: 'Knyga sėkmingai ištrinta!', type: 'success' },
  validation_error: { msg: 'Užpildykite visus laukus!', type: 'danger' },
  file_error: { msg: 'Netinkamas paveikslėlio formatas. Palaikomi formatai: jpeg, png', type: 'danger' },
  login_error: { msg: 'Neteisingi prisijungimo duomenys!', type: 'danger' },
  login_ok: { msg: 'Sėkmingai prisijungta!', type: 'success' },
  logout_ok: { msg: 'Sėkmingai atsijungta!', type: 'success' }
};

// MIDDLEWARE

const auth = (req, res, next) => {
  if (req.url === '/login' || req.url === '/') {
    return next();
  }
  if (!req.session.data.user) {
    res.status(401).redirect(domain + 'login');
    return;
  }
  next();
}


const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
      req.fileValidationError = true;
    }
  }
});

const sessionManager = (req, res, next) => {
  let sessionId = req.cookies.session || '';
  let sessionData = fs.readFileSync('./data/session.json', 'utf8');
  sessionData = JSON.parse(sessionData);
  const findSession = sessionData.find(s => s.id === sessionId);
  if (sessionId && findSession) {
    req.session = structuredClone(findSession);
  } else {
    sessionId = uuidv4();
    const session = { id: sessionId, data: {} };
    req.session = session;
    sessionData.push(session);
    sessionData = JSON.stringify(sessionData);
    fs.writeFileSync('./data/session.json', sessionData);
  }
  res.cookie('session', sessionId, { maxAge: 1000 * 60 * 60 * 24 });
  next();
}

const oldDataManager = (req, res, next) => {
  const requestMethod = req.method;
  if (requestMethod === 'GET') {
    addToSession(req, 'oldData', {});
  } else {
    addToSession(req, 'oldData', req.body);
  }
  next();
}

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(upload.single('cover'));
app.use(sessionManager);
app.use(auth);
app.use(oldDataManager);


// HELPERS

const getMessages = req => {
  if (!req.session.data.msg) return null;
  const msg = req.session.data.msg;
  removeFromSession(req, 'msg');
  const message = messages[msg];
  if (!message) return null;
  return message;
}

const addToSession = (req, key, value) => {
  const sessionData = fs.readFileSync('./data/session.json', 'utf8');
  const sessions = JSON.parse(sessionData);
  const session = sessions.find(s => s.id === req.session.id);
  session.data[key] = value;
  fs.writeFileSync('./data/session.json', JSON.stringify(sessions));
}

const removeFromSession = (req, key) => {
  const sessionData = fs.readFileSync('./data/session.json', 'utf8');
  const sessions = JSON.parse(sessionData);
  const session = sessions.find(s => s.id === req.session.id);
  delete session.data[key];
  fs.writeFileSync('./data/session.json', JSON.stringify(sessions));
}

const show404 = res => {
  const file = top + fs.readFileSync('./html/404.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  const data = {
    pageTitle: 'Puslapis nerastas',
    domain,
    message: null,
    nomenu: true
  };
  const html = template(data);
  res.status(404).send(html);
}

// ROUTER

app.get('/', (req, res) => {
  // sort
  let sortBy;
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  switch (req.query?.sort) {
    case 'title_az':
      sortBy = 'title_az';
      books = books.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'title_za':
      sortBy = 'title_za';
      books = books.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'author_az':
      sortBy = 'author_az';
      books = books.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case 'author_za':
      sortBy = 'author_za';
      books = books.sort((a, b) => b.author.localeCompare(a.author));
      break;
    default:
      sortBy = 'default';
  }

  const file = top + fs.readFileSync('./html/read.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  const data = {
    pageTitle: 'Knygų sąrašas',
    domain,
    books,
    message: getMessages(req),
    sortBy: { [sortBy]: true },
    user: req.session.data?.user || 'Svetimas (Alien)', // jei nera user, tai svetimas
    loggedIn: req.session.data?.user ? true : false
  };


  /*
  const data = {};
  data.sortBy = 'title_az'; taip noreciau padaryti, kad butu pasirinkta
  vietoj sitos eilutes:
  const data = sortBy: {};
  data.sortBy.title_az = true;
  */

  const html = template(data);
  res.send(html);
});

app.get('/create', (req, res) => {
  const file = top + fs.readFileSync('./html/create.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  const data = {
    pageTitle: 'Nauja knyga',
    domain: domain,
    message: getMessages(req),
    oldData: req.session.data.oldData || {},
    user: req.session.data?.user || 'Svetimas (Alien)',
    loggedIn: req.session.data?.user ? true : false
  };
  const html = template(data);
  res.send(html);
});

app.get('/edit/:id', (req, res) => {
  const file = top + fs.readFileSync('./html/edit.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  const id = req.params.id;
  const book = books.find(book => book.id === id);
  if (!book) {
    show404(res);
    return;
  }
  const data = {
    pageTitle: `Redaguoti knygą ${book.title}`,
    domain: domain,
    ...book,
    message: getMessages(req),
    oldData: req.session.data.oldData || {},
    user: req.session.data?.user || 'Svetimas (Alien)',
    loggedIn: req.session.data?.user ? true : false
  };
  const html = template(data);
  res.send(html);
});

app.get('/show/:id', (req, res) => {
  const file = top + fs.readFileSync('./html/show.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  const id = req.params.id;
  const book = books.find(book => book.id === id);
  if (!book) {
    show404(res);
    return;
  }
  const data = {
    pageTitle: `Rodyti knygą ${book.title}`,
    domain: domain,
    ...book,
    user: req.session.data?.user || 'Svetimas (Alien)',
    loggedIn: req.session.data?.user ? true : false
    
  };
  const html = template(data);
  res.send(html);
});

app.get('/delete/:id', (req, res) => {
  const file = top + fs.readFileSync('./html/delete.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  const id = req.params.id;
  const book = books.find(book => book.id === id);
  if (!book) {
    show404(res);
    return;
  }
  const data = {
    pageTitle: 'Trynimo patvirtinimas',
    domain: domain,
    ...book,
    nomenu: true,
    user: req.session.data?.user || 'Svetimas (Alien)',
    loggedIn: req.session.data?.user ? true : false
  };
  const html = template(data);
  res.send(html);
});



app.post('/store', (req, res) => {
  const { title, author, year, genre, isbn, pages } = req.body;
  const uploadFileName = req.file?.filename; // req.file egzistuoja tik jei yra failas
  const id = uuidv4();
  if (!title || !author || !year || !genre || !isbn || !pages) {
    if (uploadFileName) {
      fs.existsSync(`public/images/${uploadFileName}`) &&
        fs.unlinkSync(`public/images/${uploadFileName}`); // delete uploaded file
    }
    addToSession(req, 'msg', 'validation_error');
    res.status(422).redirect(domain + 'create');
    return;
  }
  if (req.fileValidationError) {
    addToSession(req, 'msg', 'file_error');
    res.status(422).redirect(domain + 'create');
    return;
  }

  const book = { id, title, author, year, genre, isbn, pages, cover: uploadFileName };
  let data = fs.readFileSync('./data/books.json', 'utf8');
  data = JSON.parse(data);
  data.push(book);
  data = JSON.stringify(data);
  fs.writeFileSync('./data/books.json', data);
  addToSession(req, 'msg', 'create_success');
  res.status(302).redirect(domain);
});

app.post('/update/:id', (req, res) => {
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  const id = req.params.id;
  const oldBook = books.find(book => book.id === id);
  if (!oldBook) {
    console.log('testuotojai patenka čia :)');
    show404(res);
    return;
  }
  const { title, author, year, genre, isbn, pages } = req.body;
  const uploadFileName = req.file?.filename;
  if (!title || !author || !year || !genre || !isbn || !pages) {
    if (uploadFileName) {
      fs.existsSync(`public/images/${uploadFileName}`) &&
        fs.unlinkSync(`public/images/${uploadFileName}`); // delete uploaded file
    }
    addToSession(req, 'msg', 'validation_error');
    res.status(422).redirect(domain + 'edit/' + id);
    return;
  }
  if (req.fileValidationError) {
    addToSession(req, 'msg', 'file_error');
    res.status(422).redirect(domain + 'edit/' + id);
    return;
  }
  
  let cover;

  if (!uploadFileName) {
    cover = oldBook.cover;
  } else {
    cover = uploadFileName;
  }

  if (req.body.delete_cover && !uploadFileName) {
    cover = undefined; // delete cover entry
  }

  if (req.body.delete_cover || uploadFileName) {
    // if exists, delete old file
    fs.existsSync(`public/images/${oldBook.cover}`) &&
      fs.unlinkSync(`public/images/${oldBook.cover}`); // delete old file
  }


  const newBook = { id: oldBook.id, title, author, year, genre, isbn, pages, cover };
  books = books.map(book => book.id === id ? newBook : book);
  books = JSON.stringify(books);
  fs.writeFileSync('./data/books.json', books);
  addToSession(req, 'msg', 'edit_success');
  res.status(302).redirect(domain);
});

app.post('/destroy/:id', (req, res) => {
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  const id = req.params.id;
  const oldBook = books.find(book => book.id === id);
  if (!oldBook) {
    show404(res);
    return;
  }

  if (oldBook.cover) {
    fs.existsSync(`public/images/${oldBook.cover}`) &&
      fs.unlinkSync(`public/images/${oldBook.cover}`); // delete old file
  }

  books = books.filter(book => book.id !== id);
  books = JSON.stringify(books);
  fs.writeFileSync('./data/books.json', books);
  addToSession(req, 'msg', 'delete_success');
  res.status(302).redirect(domain);
});


app.get('/login', (req, res) => {
  const file = top + fs.readFileSync('./html/login.html', 'utf8') + bottom;
  const template = handlebars.compile(file);
  const data = {
    pageTitle: 'Prisijungimas',
    domain: domain,
    nomenu: true,
    message: getMessages(req),
  };
  const html = template(data);
  res.send(html);
});

app.post('/login', (req, res) => {

  if (req.query?.logout) {
    addToSession(req, 'user', undefined);
    addToSession(req, 'msg', 'logout_ok');
    res.status(302).redirect(domain);
    return;
  }

  let users = fs.readFileSync('./data/users.json', 'utf8');
  users = JSON.parse(users);
  const { name, psw } = req.body;
  const pswhash = md5(psw);

  const user = users.find(user => user.name === name && user.psw === pswhash);

  if (!user) {
    addToSession(req, 'msg', 'login_error');
    res.status(401).redirect(domain + 'login');
    return;
  }

  addToSession(req, 'user', user.name);
  addToSession(req, 'msg', 'login_ok');
  res.status(302).redirect(domain);

});



app.listen(port, () => {
  console.log(`Knygynas darbui pasiruošęs ant ${port} porto!`);
});