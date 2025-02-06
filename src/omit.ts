import { Car } from "./class.js";

type OmitCar = Omit<Car, "type">;

const carWithoutType: OmitCar = {name: "GT-R", brand: "Nissan", id: "sampleUuid"}
console.log(carWithoutType)
