const express = require('express');
const router = express.Router();

const Book = require('../../models/Books');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public

router.get('/', (req, res) => {
    Book.find().then(books => res.json(books))
        .catch(err => res.status(404).json({
            noboobsfound: 'No Boobs found'
        }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({
            noboobfound: 'No boob found'
        }));
});

// @route GET api/books
// @description add/save book
// @access Public

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({
            msg: 'Boob added successfully'
        }))
        .catch(err => res.status(400).json({
            error: 'enable to add this boob'
        }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({
            msg: 'Updated succesfully'
        }))
        .catch(err => res.status(400).json({
            error: 'Unable to update the Database'
        }));
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({
            msg: 'Boob entry deleted succesfully'
        }))
        .catch(err => res.status(404).json({
            error: 'No such Boob'
        }));
});

module.exports = router;