export type CarTypes = "4WD" | "FF" | "FR" | "MR";
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