'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorSchema extends Schema {
  up() {
    this.create('authors', (table) => {
      table.increments()
      // First name varchar, 80 chars max
      table.string('firstname', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.date('date').notNullable()
      table.timestamps()


      // Command to insert to database
      // INSERT INTO authors(firstname, lastname, date)
      // VALUES
      //   ('Shiro', 'Kanzaki', '1993-03-30'),
      //   ('Kuro', 'Shizune', '1997-06-30'),
      //   ('Akaza', 'Shinji', '2000-09-15');

    })
  }

  down() {
    this.drop('authors')
  }
}

module.exports = AuthorSchema
