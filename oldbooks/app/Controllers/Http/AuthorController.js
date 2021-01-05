'use strict'

// const authorsDB = [
//   {
//     "id": 1,
//     "name": "JRR Tolkien"
//   },
//   {
//     "id": 2,
//     "name": "CS Lewis"
//   },
//   {
//     "id": 3,
//     "name": "Goh Sin Tub"
//   },
//   {
//     "id": 4,
//     "name": "Catherine Lee"
//   }

// ]

const Author = use('App/Models/Author')

class AuthorController {
  async index({ view }) {
    let allAuthors = await Author.all()
    return view.render('authors/index', {
      "authors": allAuthors.toJSON()
    })
  }

  async authorInfo({ view, params }) {
    let author = await Author.find(params.author_id);

    return view.render('authors/authorInfo', {
      "author": author.toJSON()
    })
  }

  create({ view }) {
    return view.render('authors/create')
  }

  async processCreate({ request, response }) {
    // Use the below to check and test whether the form processes what we filled in
    // console.log(request.post())
    // return response.json(request.post())

    let body = request.post()
    let author = new Author()
    author.firstname = body.firstname
    author.lastname = body.lastname
    author.date = body.date
    await author.save();
    return response.route('AuthorController.index')
  }
}

module.exports = AuthorController
