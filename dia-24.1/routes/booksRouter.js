const express = require('express');

const BooksRouter = express();

const { getAllBooks, getBookById, createNewBook, updateBookById, excludeBook } = require('../controllers/BooksControllers');

BooksRouter.get('/', getAllBooks);
BooksRouter.get('/:id', getBookById);
BooksRouter.post('/', createNewBook);
BooksRouter.post('/:id', updateBookById);
BooksRouter.delete('/:id', excludeBook);

module.exports = { BooksRouter };
