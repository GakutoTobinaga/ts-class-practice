import { initializeDatabase } from "./db.js";
export type CarTypes = "4WD" | "FF" | "FR" | "MR";
type CarTypesF = Exclude<CarTypes, "4WD" | "MR">
import { Data } from "./db.js";
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

export class CarShop {

    private db = initializeDatabase();
    private cars: Car[] = []
    private carsF: Car[] = []
    constructor() {
        this.db = initializeDatabase();
    }
    async listAllCars() : Promise<Car[]>{
        await this.db.read();
        this.db.data ||= { cars: [] };
        const cars : Car[] = this.db.data.cars;
        return cars
    }
    
    listCarsF(): Car[] {
        return this.carsF.map((x) => x)
    }

    async addCar(car: Car) : Promise<string> {
        try {
            await this.db.read();
            this.db.data ||= { cars: [] };
            if (!car.name || !car.brand || !car.type || !car.id) {
                throw new Error(`Invalid car data`)
            }
            this.db.data.cars.push(car)
            await this.db.write();
            const message: string = `addCar() has been succeeded.`
            return message
        } catch (error){
                    // エラーが標準のErrorオブジェクトであるか確認
            if (error instanceof Error) {
                console.error('Error message:', error.message); // 安全にエラーメッセージにアクセス
                console.error('Stack trace:', error.stack); // スタックトレースにアクセス
            } else {
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

    deleteCar(id: string) : void {
        this.cars = this.cars.filter((car: Car) => car.id === id)
    }

    findCarByName(name: string): Car | undefined {
        return this.cars.find(car => car.name === name);
    }

    findCarByBrand(brand: string): Car[] | undefined {
        return this.cars.filter((car) => car.brand === brand);
    }

    updateCar(id: string, name: string, brand: string, type: CarTypes): Car {
        if (!id) {
            throw new Error("id isn't provided")
        }
        const car : Car | undefined = this.cars.find(car => car.id === id);
        if (!car) {
            throw new Error("Car has not been founded")
        }
        car.name = name;
        car.brand = brand;
        car.type = type;
        return car
    }
}