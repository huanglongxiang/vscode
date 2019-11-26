const express = require('express');
const app = express.Router();
const server = require('../server/server');


app.get('/books',server.allbook);
app.get('/books/book/:id',server.getbookbyid);
app.post('/books/book',server.addbook);
app.delete('/books/book/:id',server.removebook);
app.put('/books/book',server.updatabook);

module.exports = app;