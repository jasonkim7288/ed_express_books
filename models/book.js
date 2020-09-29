const books = [
  {
    id: 1,
    name: 'IT',
    author: 'Stephen King',
    movie: true
  },
  {
    id: 2,
    name: 'Looking for Alaska',
    author: 'John Green',
    movie: false
  }
]

const findBook = (id) => {
  const foundBooks = books.filter(book => book.id === parseInt(id));
  if (foundBooks.length === 0) {
    return null;
  } else {
    return foundBooks[0];
  }
}

module.exports = { books, findBook }
