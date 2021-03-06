
export default class Library {
  constructor(books = []){
    this.books = books;
  }
}

// const Library = function (books = []) {
//   this.books = books;
// };

Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};


function printInventory(){
  this.books.forEach((book)=>{
    const {title, author} = book;
    console.log(`${title} by ${author}`);
  })
}

// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

module.exports = Library;
