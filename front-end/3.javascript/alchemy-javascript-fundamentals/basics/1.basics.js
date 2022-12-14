function scream(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
      const remainder = i % 2;
      const isEven = remainder === 0;

      if(isEven) {
          str += 'A';
      } else {
        str += 'a';
      }
      
  }
  return str;
}

console.log(scream(5));

console.log(4%2);

function topDouble(value, top) {

  while (value < top) {
    value *= 2;
    if (value >= top) {
      return value - (value / 2);
    }
  }

  return value;
}

console.log(topDouble(2, 100));

console.log(`not working`);
console.log(1**1);
console.log(topDouble(1, 5));

// PRACTICE

// is it even?

// my solution
function isEven(num) {
  let remainder = num % 2;
  let isEven = remainder === 0;
  return isEven;
}

console.log(isEven(2));

// actual solution
function isEven(num) {
  return num % 2 === 0;
}


// smaller number

function smallerNumber(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else return num1;
}

console.log(smallerNumber(1, 4));

// message interpolation

// number check

function checkNumber(num) {
  if (num > 0) {
    return `positive`;
  } else if (num < 0) {
    return `negative`;
  }
  
  return `zero`;
}

console.log(checkNumber(2));


// max sum

function maxSum(num) {
  let maxSum = 0;

  for (let i = 1; i <= num; i++) {
      maxSum += i;
  }

  return maxSum;
}
