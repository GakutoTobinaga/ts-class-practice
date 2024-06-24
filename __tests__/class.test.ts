import { Car, CarShop } from '../src/class';

describe('CarShop', () => {
  let carShop: CarShop;
  const car1 = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90");
  const car2 = new Car("MR2", "Toyota", "MR", "fjf038fj08");
  const car3 = new Car("86", "Toyota", "FR", "o234ufh948f");
  beforeEach(() => {
    carShop = new CarShop();
    carShop.addCar(car1);
    carShop.addCar(car2);
    carShop.addCar(car3);
  });

  it('should add a car', () => {
    const car = new Car("Lancer EVO VIII", "Mitsubishi", "4WD", "foiaejoiawf90");
    carShop.addCar(car);
    expect(carShop.listAllCars()).toContain(car);
  });

  it('should list all cars', () => {
    const allCars = carShop.listAllCars();
    expect(allCars).toHaveLength(3);
    expect(allCars).toContain(car1);
    expect(allCars).toContain(car2);
    expect(allCars).toContain(car3)
  });

  it('should return searched Car object', () => {
    const lancer = carShop.findCarByName("Lancer EVO VIII");
    expect(lancer).toEqual(car1);
  });

  it('should return this brand cars objects', () => {
    const toyotaCars = carShop.findCarByBrand("Toyota");
    expect(toyotaCars).toHaveLength(2);
    expect(toyotaCars).toContain(car2);
    expect(toyotaCars).toContain(car3);
    expect(toyotaCars).not.toContain(car1);
  })

  it('should change car information', () => {
    const updatedCar = carShop.updateCar("foiaejoiawf90", "Lancer EVO IX", "Mitsubishi", "4WD");
    expect(updatedCar.name).not.toBe("Lancer EVO VIII")
    expect(updatedCar.name).toBe("Lancer EVO IX")
  })
});
