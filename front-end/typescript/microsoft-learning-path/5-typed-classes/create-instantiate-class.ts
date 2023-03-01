interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
  // properties
  private static numberOfCars: number = 0; // static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    // Class.prop instead of this.prop
    Car.numberOfCars++; // increments value of static property when constructor is called

    if((doors % 2) === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }
  // accessors

  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return 'the color of the car is' + this._color;
  }

  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if((doors % 2) === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }
  // methods

  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  } // static method

  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }

  brake(): string {
    return `${this.worker()} is braking with the standard breaking system.`
  }

  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}.`;
  }

  // this function performs work for other methods

  protected worker(): string {
    return this._make;
  }

}

// instantiate a class

let myCar1 = new Car('nissan', 'gray');

// parameter passed to the constructor / accessing property through get or set
console.log(myCar1.color); 'the color of the car is blue'
// property defined in the class / raw data of the class
// console.log(myCar1._color);

// testing methods
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars()); // 2

// extending a class

class ElectricCar extends Car {

  // properties unique to subclass
  private _range: number;

  // constructor
  constructor (make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  // accessors
  get range() {
    return this._range;
  }

  set range(range) {
    this._range = range;
  }

  // methods
  charge() {
    console.log(this.worker() + ' is charging.');
  }

  brake(): string {
    return `${this.worker()} is braking with regenerative breaks.`
  }

}

let spark = new ElectricCar('chevy', 'red', 124, 2);
let modelT = new ElectricCar('tesla', 'black', 263);

console.log(modelT.doors);
spark.charge();

console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"



// interface could be used in a shared module for client and server code

// client side



