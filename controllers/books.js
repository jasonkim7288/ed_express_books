const { books, findBook } = require('../models/book')

module.exports = {
  index: (req, res) => {
    res.status(200).json(books);
  },
  show: (req, res) => {
    const foundBook = findBook(req.params.bookId);
    if (foundBook) {
      res.status(200).json(foundBook);
    } else {
      res.status(404).json({message: "No records"});
    }
  },
  create: (req, res) => {
    books.push(req.body);
    res.status(200).json(req.body);
  },
  update: (req, res) => {
    bookToUpdate = req.body;
    let  foundBook = findBook(req.params.bookId);
    if (foundBook) {
      Object.keys(bookToUpdate).forEach(key => {
        foundBook[key] = bookToUpdate[key];
      })
      res.status(200).json(foundBook);
    } else {
      res.status(404).json({message: "No records"});
    }
  },
  destroy: (req, res) => {
    const index = books.findIndex(book => book.id === parseInt(req.params.bookId));
    if (index !== -1) {
      books.splice(index, 1);
      res.status(200).json({message: "succeed"});
    } else {
      res.status(404).json({message: "No records"});
    }
  }
}