import { Car, CarShop } from "./class.js";
import { makeShortUuid } from "./db.js";
const car1 = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", makeShortUuid())
const car2 = new Car("MR2", "Toyota", "MR", makeShortUuid())
const carShop = new CarShop()


// await carShop.addCar(car2)
// carShop.deleteCar('7rtzDbqcayMkSyfvyjX3VQ');
// await carShop.updateCar("gufw13YRWKDS7VBh5QFmKi", "Nissan", "GT-R34", "FR");
// const allCars : Car[] = await carShop.listAllCars()
// console.log(allCars)
// await carShop.addCar(car2)
// const allCars = await carShop.listAllCars()
// console.log(allCars)
const allCarsDesignatedType = await carShop.findCarsByType("FR");
console.log(allCarsDesignatedType)
// carShop.addCar(car)
// carShop.addCar(car2)
// const carlist = carShop.listAllCars()
// console.log(carlist)