// required
function addNumbers (x: number, y: number): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
// addNumbers(1);    // Returns an error

// optional
function addNumbers1 (x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers1(1, 2); // Returns 3
addNumbers1(1);    // Returns 1

// default
function addNumbers2 (x: number, y = 25): number {
  return x + y;
}

addNumbers2(1, 2);  // Returns 3
addNumbers2(1);     // Returns 26

// rest parameters

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number =  firstNumber;
  for(let counter = 0; counter < restOfNumbers.length;counter++) {
    if(isNaN(restOfNumbers[counter])){
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

// destructured parameters

interface Message {
  text: string;
  sender: string;
}

function displayMessage({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text})`);
}

displayMessage({sender: 'Rafael', text: 'hello there!'});

let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

let addThreeOptional = (x: number, y: number, z?: number): number => {
  if (z === undefined) {
    return x + y;
  } else {
    return x + y + z;
  }
}

// default parameters

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

subtractThreeNumbers(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);   // returns -25

