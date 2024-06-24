"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, isbn) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    Book.prototype.displayInfo = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author, ", ISBN: ").concat(this.isbn, ", Borrowed: ").concat(this.isBorrowed);
    };
    Book.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log('${this.title} has been borrowed.');
        }
        else {
            console.log('${this.title} is already borrowed.');
        }
    };
    Book.prototype.return = function () {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log('${this.title} has been returned.');
        }
        else {
            console.log('${this.title} is not borrowed.');
        }
    };
    return Book;
}());
exports.Book = Book;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (isbn) {
        this.books = this.books.filter(function (book) { return book.isbn !== isbn; });
    };
    Library.prototype.listBooks = function () {
        this.books.forEach(function (book) {
            console.log(book.displayInfo());
        });
    };
    Library.prototype.borrowBookByIsbn = function (isbn) {
        var book = this.books.find(function (book) { return book.isbn === isbn; });
        if (book) {
            book.borrow();
        }
        else {
            console.log('This code (${isbn}) is not subscripted');
        }
    };
    Library.prototype.returnBookByIsbn = function (isbn) {
        var book = this.books.find(function (book) { return book.isbn === isbn; });
        if (book) {
            book.return();
        }
        else {
            console.log("This code (".concat(isbn, ") is not subscripted"));
        }
    };
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=class.js.map