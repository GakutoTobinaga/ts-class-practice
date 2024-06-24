"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var class_2 = require("./class");
var book = new class_1.Book("1Q84", "Haruki Murakami", "978-4-10-353422-8");
var library = new class_1.Library();
library.addBook(book);
library.listBooks();
var car = new class_2.Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90");
var car2 = new class_2.Car("MR2", "Toyota", "MR", "fjf038fj08");
var carShop = new class_2.CarShop();
carShop.addCar(car);
carShop.addCar(car2);
var carlist = carShop.listAllCars();
console.log(carlist);
//# sourceMappingURL=script.js.map