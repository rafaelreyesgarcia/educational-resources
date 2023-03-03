function getArray(items : any[]) : any[] {
  return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['cats', 'dogs', 'birds']);

numberArray.push(25); // OK
stringArray.push('rabbits'); // OK
numberArray.push('this isn\'t a number'); // shouldn't be ok
stringArray.push(30); // shouldn't be ok

function genericGetArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let genericNumberArray = genericGetArray<number>([5, 10, 15, 20]);
let genericStringArray = genericGetArray<string>(['cats', 'dogs', 'birds']);

// genericNumberArray.push('not a number'); // compile time error
// genericStringArray.push(2); // compile time error

// using multiple type variables

type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U) /* return type is inferred*/ {
  let result: ValidTypes = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + value;
  }
  console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
  console.log(message);
  return result;
}

let returnNumber = identity<number, string>(100, 'hello!');
let returnString = identity<string, string>('100', 'hola!');
// let returnBoolean = identity<boolean, string>(true, 'bonjour!'); // error wrong type boolean

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error