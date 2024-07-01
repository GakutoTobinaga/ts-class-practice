import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
/**
 * @Car
 * Car have 4 infos, id will be added as an uuid in ../script.ts
 */
export class Car {
    constructor(name, brand, type, id, quantity = 0) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.id = id;
        this.quantity = quantity;
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
            const message = `${car.name} has been added successfully., ${car.quantity}`;
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
    async deleteCar(id) {
        try {
            const car = await this.findCarById(id);
            if (!car) {
                return undefined;
            }
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
    async findCarById(id) {
        var _a;
        try {
            await this.db.read();
            (_a = this.db).data || (_a.data = { cars: [] });
            const car = await this.db.data.cars.find(car => car.id === id);
            return car;
        }
        catch (err) {
            throw new Error("Problem has occurred.");
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
    async updateCar(id, carWithoutId) {
        if (!id) {
            throw new Error("id isn't provided");
        }
        try {
            await this.db.read();
            const car = this.db.data.cars.find(car => car.id === id);
            if (!car) {
                throw new Error("Car has not been founded");
            }
            car.name = carWithoutId.name;
            car.brand = carWithoutId.brand;
            car.type = carWithoutId.type;
            car.quantity = carWithoutId.quantity;
            await this.db.write();
            console.log("update has been succeeded");
        }
        catch (error) {
            throw new Error("update has been failed");
        }
    }
}
//# sourceMappingURL=class.js.map