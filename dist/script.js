"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var book = new class_1.Book("1Q84", "Haruki Murakami", "978-4-10-353422-8");
var library = new class_1.Library();
library.addBook(book);
library.listBooks();
//# sourceMappingURL=script.js.map