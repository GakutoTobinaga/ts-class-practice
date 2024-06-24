export class Book {
    title: string;
    author: string;
    isbn: string;
    isBorrowed: boolean = false;
    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    displayInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Borrowed: ${this.isBorrowed}`;
    }
    borrow(): void {
        if (!this.isBorrowed){
            this.isBorrowed = true;
            console.log('${this.title} has been borrowed.')
        } else {
            console.log('${this.title} is already borrowed.')
        }
    }
    return(): void {
        if (this.isBorrowed){
            this.isBorrowed = false;
            console.log('${this.title} has been returned.')
        } else {
            console.log('${this.title} is not borrowed.')
        }
    }
}

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(isbn: string): void {
        this.books = this.books.filter((book: Book) => book.isbn !== isbn);
    }

    listBooks(): void {
        this.books.forEach(book => {
            console.log(book.displayInfo());
        });
    }

    borrowBookByIsbn(isbn: string): void {
        const book = this.books.find((book: Book) => book.isbn === isbn);
        if (book) {
            book.borrow();
        } else {
            console.log(`This code (${isbn}) is not subscripted`)
        }
    }

    returnBookByIsbn(isbn:string) : void {
        const book = this.books.find((book: Book) => book.isbn === isbn);
        if (book) {
            book.return();
        } else {
            console.log(`This code (${isbn}) is not subscripted`)
        }
    }
}
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

    addCar(car: Car) : void {
        this.cars.push(car)
        console.log(`${car.name} has been added successfully`)
    }

    addCarF(car: Car) : void {
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
