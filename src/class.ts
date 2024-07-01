import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
export type CarTypes = "4WD" | "FF" | "FR" | "MR";
type CarTypesF = Exclude<CarTypes, "4WD" | "MR">

/**
 * @Car Car have 4 infos, id will be added as an uuid in ../script.ts
 */
export class Car {
    name: string;
    brand: string;
    type: string;
    id: string;
    constructor(name: string, brand: string, type: CarTypes | CarTypesF, id: string){
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.id = id;
    }
}
export type Data = {
    cars: Car[];
  };
  
  // Read or create db.json
  
  export function initializeDatabase() {
    const adapter = new JSONFile<Data>('db.json');
    const db = new Low<Data>(adapter, { cars: [] });
    // const car = new CarShop()
    // 返したdbのメソッドを使う
    return db
  }
export class CarShop {

    private db : Low<Data> = initializeDatabase();
    private cars: Car[] = []
    private carsF: Car[] = []
    constructor() {
        this.db = initializeDatabase();
    }
    async listAllCars() : Promise<Car[]>{
        await this.db.read();
        this.db.data ||= { cars: [] };
        return this.db.data.cars;
    }
    
    listCarsF(): Car[] {
        return this.carsF.map((x) => x)
    }
    /**
     * 
     * @param car car information
     * @returns error message
     */
    async addCar(car: Car) : Promise<string> {
        try {
            await this.db.read();
            this.db.data ||= { cars: [] };
            if (!car.name || !car.brand || !car.type || !car.id) {
                throw new Error(`Invalid car data`)
            }
            this.db.data.cars.push(car)
            await this.db.write();
            const message: string = `${car.name} has been added successfully.`
            return message
        } catch (error){
            if (error instanceof Error) {
                console.error('Error message:', error.message);
                console.error('Stack trace:', error.stack);
            } else {
                console.error('Unexpected error:', error);
            }
            throw error;
        }
    }
    async addCars(cars: Car[]): Promise<void | string[]> {
        try {
            await this.db.read();
            this.db.data ||= { cars: [] };
            const messages: string[] = [];
            for (const car of cars) {
                const message = await this.addCar(car);
                messages.push(message);
            }
            return messages
        } catch (error){
                    // エラーが標準のErrorオブジェクトであるか確認
            if (error instanceof Error) {
                console.error('Error message:', error.message);
                console.error('Stack trace:', error.stack);
            } else {
                console.error('Unexpected error:', error);
            }
            throw error; // エラーを再スローする
        }
    }

    async deleteCar(id: string) : Promise<Car | undefined> {
        try {
            const car : Car | undefined = await this.findCarById(id);
            if (!car) {
                return undefined;
            }
            const filteredCars = this.db.data.cars.filter((car: Car) => car.id !== id);
            this.db.data.cars = filteredCars;
            await this.db.write();
        } catch (error) {
            throw new Error(`deleteCar is failed.`)
        } finally {
        }
    }
    async findCarById(id: string): Promise<Car | undefined> {
        try {
            await this.db.read();
            this.db.data ||= { cars: [] };
            const car : Car  | undefined = await this.db.data.cars.find(car => car.id === id);
            return car
        } catch (err) {
            throw new Error("Problem has occurred.")
        }
    }
    findCarByName(name: string): Car | undefined {
        return this.cars.find(car => car.name === name);
    }

    findCarByBrand(brand: string): Car[] | undefined {
        return this.cars.filter((car) => car.brand === brand);
    }

    async findCarsByType(type: CarTypes): Promise<Car[]> {
        await this.db.read();
        const cars : Car[] = this.db.data.cars.filter((car) => car.type === type);
        return cars
    }
    async updateCar(id: string, name: string, brand: string, type: CarTypes): Promise<Car> {
        if (!id) {
            throw new Error("id isn't provided")
        }
        try {
            await this.db.read();
            const car : Car | undefined = this.db.data.cars.find(car => car.id === id);
            if (!car) {
                throw new Error("Car has not been founded")
            }
            car.name = name;
            car.brand = brand;
            car.type = type;
            await this.db.write();
            return car
        } catch (error) {
            throw new Error("update has been failed")   
        }
    }
}