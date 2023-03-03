/*
interface with two properties
two generic type variables for the property types
*/
interface Identity<T, U> {
  value: T;
  message: U;
}

// declare variables using interface as object type

let returnNumber: Identity<number, string> = {
  value: 25,
  message: 'hello'
}

let returnString: Identity<string, number> = {
  value: 'hello',
  message: 25
}

// generic interface as a function type

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

// function declaration with the same type signature as the interface

function processIdentity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;

let returnNumber1 = processor(100, 'hello');

// generic interface as a class type

interface ProcessIdentityClass<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processIdentityClass<X, Y> implements ProcessIdentityClass<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value
  }
}

let processorClass = new processIdentityClass<number, string>(100, 'hello!');

processorClass.process();
// processorClass.value = '100'; // type check error

// generic class without interace

class processIdentityClassNoInterface<T, U> {
  private _value: T;
  private _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value
  }
}

let processorNoInterface = new processIdentityClassNoInterface<number, string>(100, 'hello');

processorNoInterface.getIdentity();

// generics with custom types/classes

class Car {
  make: string = 'Generic Car';
  doors: number = 4;
}
class ElectricCar extends Car {
  make = 'Electric Car';
  doors = 4
}
class Truck extends Car {
  make = 'Truck';
  doors = 2
}
function accelerate<T extends Car> (car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`)
  return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);

let myTruck = new Truck;
accelerate<Truck>(myTruck);
