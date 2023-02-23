function highLow(numbers) {
  const numbersArray = numbers.split(' ');
  const max = Math.max(...numbersArray);
  const min = Math.min(...numbersArray);
  const maxMin = [max, min];
  return maxMin.join(' ');
}

console.log(highLow("1 2 3 4 5"));

// convert strings to arrays

const stringOfNumbers = '1 2 3 4 5';

console.log('split method:', stringOfNumbers.split(''));

console.log('spread: ', [...stringOfNumbers]);

console.log( 'Array.from: ',Array.from(stringOfNumbers));

console.log('Object.assign', Object.assign([], stringOfNumbers));

// alternative solutions

function highAndLow1(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}


function highAndLow2(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// using sort method

function highAndLow3(numbers){
  let arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
}

function highAndLow4(numbers){
  var arr = numbers.split(" ").map( (x) => parseInt(x) );
  var max = arr.reduce((p, c) => p > c ? p : c );
  var min = arr.reduce((p, c) => p < c ? p : c );
  return max+" "+min;
}