import { Book, Library } from "./class";

const book = new Book("1Q84", "Haruki Murakami", "978-4-10-353422-8")
const library = new Library()

library.addBook(book)
library.listBooks()