import { Car, CarShop, CarWithoutId } from "./class.js";
import { makeShortUuid } from "./db.js";
const car1 = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "sample-id")
const car2 = new Car("MR2", "Toyota", "MR", makeShortUuid())
const car3 = new Car("MR-S", "Toyota", "MR", makeShortUuid())
const carShop = new CarShop()

await carShop.addCar(car1);
await carShop.updateCar("sample-id", {name: "Lancer EVO X", brand: "Mitsubishi", type: "4WD", quantity: 20})
const allCars = await carShop.listAllCars()
console.log(allCars)
// carShop.addCar(car)
// carShop.addCar(car2)
// const carlist = carShop.listAllCars()
// console.log(carlist)