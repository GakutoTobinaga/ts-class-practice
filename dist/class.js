export class Car {
    constructor(name, brand, type, id) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.id = id;
    }
}
export class CarShop {
    constructor() {
        this.cars = [];
        this.carsF = [];
    }
    listAllCars() {
        return this.cars.map((x) => x);
    }
    listCarsF() {
        return this.carsF.map((x) => x);
    }
    addCar(car) {
        // const uuid: string = makeShortUuid()
        // car.id = uuid
        this.cars.push(car);
        console.log(`${car.name} has been added successfully`);
    }
    addCarF(car) {
        this.carsF.push(car);
        if (car.type === "FF" || car.type === "FR") {
            this.carsF.push(car);
        }
        else {
            throw new Error("This car is not a FF or FR car.");
        }
        console.log(`${car.name} has been added successfully, also CarsF`);
    }
    deleteCar(id) {
        this.cars = this.cars.filter((car) => car.id === id);
    }
    findCarByName(name) {
        return this.cars.find(car => car.name === name);
    }
    findCarByBrand(brand) {
        return this.cars.filter((car) => car.brand === brand);
    }
    updateCar(id, name, brand, type) {
        if (!id) {
            throw new Error("id isn't provided");
        }
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new Error("Car has not been founded");
        }
        car.name = name;
        car.brand = brand;
        car.type = type;
        return car;
    }
}
//# sourceMappingURL=class.js.map