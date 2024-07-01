import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
/**
 * @Car Car have 4 infos, id will be added as an uuid in ../script.ts
 */
export class Car {
    constructor(name, brand, type, id) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.id = id;
    }
}
// Read or create db.json
export function initializeDatabase() {
    const adapter = new JSONFile('db.json');
    const db = new Low(adapter, { cars: [] });
    // const car = new CarShop()
    // 返したdbのメソッドを使う
    return db;
}
export class CarShop {
    constructor() {
        this.db = initializeDatabase();
        this.cars = [];
        this.carsF = [];
        this.db = initializeDatabase();
    }
    async listAllCars() {
        var _a;
        await this.db.read();
        (_a = this.db).data || (_a.data = { cars: [] });
        return this.db.data.cars;
    }
    listCarsF() {
        return this.carsF.map((x) => x);
    }
    /**
     *
     * @param car car information
     * @returns error message
     */
    async addCar(car) {
        var _a;
        try {
            await this.db.read();
            (_a = this.db).data || (_a.data = { cars: [] });
            if (!car.name || !car.brand || !car.type || !car.id) {
                throw new Error(`Invalid car data`);
            }
            this.db.data.cars.push(car);
            await this.db.write();
            const message = `${car.name} has been added successfully.`;
            return message;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error message:', error.message);
                console.error('Stack trace:', error.stack);
            }
            else {
                console.error('Unexpected error:', error);
            }
            throw error;
        }
    }
    async addCars(cars) {
        var _a;
        try {
            await this.db.read();
            (_a = this.db).data || (_a.data = { cars: [] });
            const messages = [];
            for (const car of cars) {
                const message = await this.addCar(car);
                messages.push(message);
            }
            return messages;
        }
        catch (error) {
            // エラーが標準のErrorオブジェクトであるか確認
            if (error instanceof Error) {
                console.error('Error message:', error.message);
                console.error('Stack trace:', error.stack);
            }
            else {
                console.error('Unexpected error:', error);
            }
            throw error; // エラーを再スローする
        }
    }
    // private addCarF(car: Car) : void {
    //     this.carsF.push(car)
    //     if (car.type === "FF" || car.type === "FR") {
    //         this.carsF.push(car)
    //     } else {
    //         throw new Error("This car is not a FF or FR car.")
    //     }
    //     console.log(`${car.name} has been added successfully, also CarsF`)
    // }
    async deleteCar(id) {
        try {
            const filteredCars = this.db.data.cars.filter((car) => car.id !== id);
            this.db.data.cars = filteredCars;
            await this.db.write();
        }
        catch (error) {
            throw new Error(`deleteCar is failed.`);
        }
        finally {
        }
    }
    findCarByName(name) {
        return this.cars.find(car => car.name === name);
    }
    findCarByBrand(brand) {
        return this.cars.filter((car) => car.brand === brand);
    }
    async findCarsByType(type) {
        await this.db.read();
        const cars = this.db.data.cars.filter((car) => car.type === type);
        return cars;
    }
    async updateCar(id, name, brand, type) {
        if (!id) {
            throw new Error("id isn't provided");
        }
        try {
            await this.db.read();
            const car = this.db.data.cars.find(car => car.id === id);
            if (!car) {
                throw new Error("Car has not been founded");
            }
            car.name = name;
            car.brand = brand;
            car.type = type;
            await this.db.write();
            return car;
        }
        catch (error) {
            throw new Error("update has been failed");
        }
    }
}
//# sourceMappingURL=class.js.map