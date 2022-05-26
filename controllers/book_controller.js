const Book = require('../models/book_model');
const DB = require('../utils/db');

const BooksRouter = require('express').Router();

//CRUD

//Read all
BooksRouter.get('/', async (req, res) => {
    try {
        let data = await new DB().FindAll("books");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//Read one
BooksRouter.get('/:id', async (req, res) => {
    try {
        let { id } = req.params; //get the id param.
        let data = await new DB().FindByID("books", id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//Create
BooksRouter.post('/add', async (req, res) => {
    try {
        let { name, author, publisher, year, price } = req.body;
        let book = new Book(name, author, publisher, year, price);
        let data = await new DB().Insert("books", book);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//Update
BooksRouter.put('/update/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let { name, author, publisher, year, price } = req.body;
        let book = new Book(name, author, publisher, year, price);
        let data = await new DB().UpdateDocById("books", id, book);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//Delete
BooksRouter.delete('/delete/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = await new DB().DeactivateDocById("books", id);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//Reactive
BooksRouter.put('/reactive/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = await new DB().ReactivateDocById("books", id);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = BooksRouter;