import { Book, Library } from "./class";
import { Car, CarShop } from "./class";

const book = new Book("1Q84", "Haruki Murakami", "978-4-10-353422-8")
const library = new Library()

library.addBook(book)
library.listBooks()

const car = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90")
const car2 = new Car("MR2", "Toyota", "MR", "fjf038fj08")
const carShop = new CarShop()

carShop.addCar(car)
carShop.addCar(car2)
const carlist = carShop.listAllCars()
console.log(carlist)