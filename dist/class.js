import { initializeDatabase } from "./db.js";
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
        this.db = initializeDatabase();
        this.cars = [];
        this.carsF = [];
    }
    async listAllCars() {
        var _a;
        await this.db.read();
        (_a = this.db).data || (_a.data = { cars: [] });
        // { cars } の型は Car[] が指定できないが、なぜreturnは Car[] で通るのか？
        const { cars } = this.db.data;
        // const first = cars[0]
        // const firstCarName = first.name
        // console.log(cars[0])
        return cars;
    }
    listCarsF() {
        return this.carsF.map((x) => x);
    }
    async addCar(car) {
        var _a;
        await this.db.read();
        (_a = this.db).data || (_a.data = { cars: [] });
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