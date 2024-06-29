import { initializeDatabase } from "./db.js";
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
        const cars = this.db.data.cars;
        return cars;
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
            const message = `addCar() has been succeeded.`;
            return message;
        }
        catch (error) {
            // エラーが標準のErrorオブジェクトであるか確認
            if (error instanceof Error) {
                console.error('Error message:', error.message); // 安全にエラーメッセージにアクセス
                console.error('Stack trace:', error.stack); // スタックトレースにアクセス
            }
            else {
                // エラーが標準のErrorオブジェクトでない場合
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