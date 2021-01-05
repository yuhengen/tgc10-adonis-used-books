'use strict'

const booksDB = [
  {
    'id': 1,
    'title': 'Lord of the Rings',
    'condition': 3
  },
  {
    'id': 2,
    'title': 'A Wizard in Rhyme',
    'condition': 2
  },
  {
    'id': 3,
    'title': 'Waylander',
    'condition': 2.5
  }

]

class BookController {
  index({view}) {
    return view.render('books/index', {
      "books": booksDB
    })
  }

  show({view, params}) {
    // extract out the book_id parameter from the URL
    let bookId = params.book_id;
    let book = booksDB.find( b => b.id === parseInt(bookId));
    return view.render("books/show", {
      "book": book
    })
  }
}

module.exports = BookController
