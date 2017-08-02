const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const http = require('http');

// app.use(express.static(__dirname + '/View'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/loginpage.html');
});

app.listen(3001, () => {
  console.log('listening');
});


app.post('/login', (req, res) => {
  res.sendFile(__dirname + '/library.html');
});

app.post('/register', (req, res) => {
  res.sendFile(__dirname + '/library.html');
});

app.get('/borrow.html', (req, res) => {
  res.sendFile(__dirname + '/borrow.html');
});

app.get('/history.html', (req, res) => {
  res.sendFile(__dirname + '/history.html');
});

app.get('/loginpage.html', (req, res) => {
  res.sendFile(__dirname + '/loginpage.html');
});

app.get('/profile.html', (req, res) => {
  res.sendFile(__dirname + '/profile.html');
});

app.get('/library.html', (req, res) => {
  res.sendFile(__dirname + '/library.html');
});