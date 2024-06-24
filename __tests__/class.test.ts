import { Car, CarShop } from '../src/class';

describe('CarShop', () => {
  let carShop: CarShop;

  beforeEach(() => {
    carShop = new CarShop();
  });

  it('should add a car', () => {
    const car = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90");
    carShop.addCar(car);
    expect(carShop.listAllCars()).toContain(car);
  });

  it('should list all cars', () => {
    const car1 = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90");
    const car2 = new Car("MR2", "Toyota", "MR", "fjf038fj08");
    carShop.addCar(car1);
    carShop.addCar(car2);
    const allCars = carShop.listAllCars();
    expect(allCars).toHaveLength(2);
    expect(allCars).toContain(car1);
    expect(allCars).toContain(car2);
  });
});
