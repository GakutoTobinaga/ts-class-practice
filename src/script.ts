import { Car, CarShop } from "./class.js";

// const car = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90")
// const car2 = new Car("MR2", "Toyota", "MR", "fjf038fj08")
const carShop = new CarShop()

const allCars : Car[] = await carShop.listAllCars()
console.log(allCars)
// carShop.addCar(car)
// carShop.addCar(car2)
// const carlist = carShop.listAllCars()
// console.log(carlist)