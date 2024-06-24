"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarShop = exports.Car = exports.Library = exports.Book = void 0;
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
            console.log("This code (".concat(isbn, ") is not subscripted"));
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
var Car = /** @class */ (function () {
    function Car(name, brand, type, id) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.id = id;
    }
    return Car;
}());
exports.Car = Car;
var CarShop = /** @class */ (function () {
    function CarShop() {
        this.cars = [];
        this.carsF = [];
    }
    CarShop.prototype.listAllCars = function () {
        this.cars.map(function (x) { return console.log(x); });
        return this.cars.map(function (x) { return x; });
    };
    CarShop.prototype.listCarsF = function () {
        this.carsF.map(function (x) { return console.log(x); });
        return this.carsF.map(function (x) { return x; });
    };
    CarShop.prototype.addCar = function (car) {
        this.cars.push(car);
        console.log("".concat(car.name, " has been added successfully"));
    };
    CarShop.prototype.addCarF = function (car) {
        this.carsF.push(car);
        if (car.type === "FF" || car.type === "FR") {
            this.carsF.push(car);
        }
        else {
            throw new Error("This car is not a FF or FR car.");
        }
        console.log("".concat(car.name, " has been added successfully, also CarsF"));
    };
    CarShop.prototype.deleteCar = function (id) {
        this.cars = this.cars.filter(function (car) { return car.id === id; });
    };
    return CarShop;
}());
exports.CarShop = CarShop;
var roles = {
    admin: "Administrator",
    user: "Regular User",
    guest: "Guest User",
};
console.log(roles.admin); // 出力: "Administrator"
console.log(roles.user); // 出力: "Regular User"
console.log(roles.guest); // 出力: "Guest User"
var tobinagaInfos = {
    Ryuichi: { age: 70, birthPlace: "Tokyo" },
    Nae: { age: 68, birthPlace: "Osaka" },
    Gakuto: { age: 30, birthPlace: "Kyoto" },
    Eita: { age: 28, birthPlace: "Nagoya" },
    Okome: { age: 25, birthPlace: "Sapporo" },
};
function getFirstElement(array) {
    return array[0] ? array[0] : undefined;
}
var number1 = getFirstElement(["OK", "NG", "PAUSE"]);
//# sourceMappingURL=class.js.map