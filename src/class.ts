import { makeShortUuid } from "./functions";

type CarTypes = "4WD" | "FF" | "FR" | "MR";
type CarTypesF = Exclude<CarTypes, "4WD" | "MR">

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
    private cars: Car[] = []
    private carsF: Car[] = []

    listAllCars(): Car[] {
        return this.cars.map((x) => x)
    }
    
    listCarsF(): Car[] {
        return this.carsF.map((x) => x)
    }

    addCar(car: Car) : void {
        // const uuid: string = makeShortUuid()
        // car.id = uuid
        this.cars.push(car)
        console.log(`${car.name} has been added successfully`)
    }

    private addCarF(car: Car) : void {
        this.carsF.push(car)
        if (car.type === "FF" || car.type === "FR") {
            this.carsF.push(car)
        } else {
            throw new Error("This car is not a FF or FR car.")
        }
        console.log(`${car.name} has been added successfully, also CarsF`)
    }

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
// ユーザーロールとその説明を定義
type UserRoles = "admin" | "user" | "guest";
type UserRoleDescriptions = Record<UserRoles, string>;

const roles: UserRoleDescriptions = {
    admin: "Administrator",
    user: "Regular User",
    guest: "Guest User",
};

console.log(roles.admin); // 出力: "Administrator"
console.log(roles.user); // 出力: "Regular User"
console.log(roles.guest); // 出力: "Guest User"

type Tobinaga = "Ryuichi" | "Nae" | "Gakuto" | "Eita" | "Okome"
type Infos = {
    age: number;
    birthPlace: string;
}
type TobinagaClanInfos = Record<Tobinaga, Infos>

const tobinagaInfos: TobinagaClanInfos = {
    Ryuichi: { age: 70, birthPlace: "Tokyo" },
    Nae: { age: 68, birthPlace: "Osaka" },
    Gakuto: { age: 30, birthPlace: "Kyoto" },
    Eita: { age: 28, birthPlace: "Nagoya" },
    Okome: { age: 25, birthPlace: "Sapporo" },
};

function getFirstElement<T>(array: T[]): T | undefined{
    return array[0] ? array[0] : undefined
}

const number1 = getFirstElement<string>(["OK", "NG", "PAUSE"])