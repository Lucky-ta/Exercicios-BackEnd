const { Book } = require('../models/');

const ERROR = {message: "Algo deu errado"};

const getAllBooks = async (req, res) => {
    
    try {
        const books = await Book.findAll();
        return res.status(200).json(books);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json(ERROR);
    }
};

const getBookById = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findByPk(id);
        return res.status(200).json(book);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json(ERROR);
    }
}

const createNewBook = async (req, res) => {
    try {
        const body = req.body;
        const newBook = await Book.create(body);
        return res.status(200).json(newBook);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json(ERROR);
    }
}

const updateBookById = async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const updatedBook = await Book.update(body, 
            {where: {id: id}}
            );
        return res.status(200).end();
    } catch (e) {
        console.log(e.message);
        return res.status(500).json(ERROR);
    }
}

const excludeBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.destroy({where: {id: id}});
        return res.status(201).json(deletedBook);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json(ERROR);
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createNewBook,
    updateBookById,
    excludeBook
};
