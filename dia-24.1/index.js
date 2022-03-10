require('dotenv').config();

const express = require('express');
const bodyParse = require('body-parser');

const { BooksRouter } = require('./routes/booksRouter');

const app = express();

app.use(bodyParse.json());

const PORT = process.env.PORT;

app.use('/books', BooksRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
});