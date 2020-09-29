const router = require('express-promise-router')();

const BooksController = require('../controllers/books');

const { validateParams } = require('../helpers/routeHelpers');

router.route('/')
  .get(BooksController.index)
  .post(BooksController.create);

router.route('/:bookId')
  .get(validateParams('bookId'), BooksController.show)
  .put(validateParams('bookId'), BooksController.update)
  .delete(validateParams('bookId'), BooksController.destroy);

module.exports = router;