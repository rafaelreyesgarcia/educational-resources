function sumLowestIntegers(numbers) {
  let sortedArray = numbers.sort((a, b) => {
    return a - b;
  })

  let sum = sortedArray[0] + sortedArray[1];

  return sum;
}

const numbers = [
  15, 28, 4, 2, 43
];

console.log(sumLowestIntegers(numbers));

// if the comparison function is omitted in the sort method, elements are converted to strings and sorted according to unicode code point value

/*
> 0 [b, a]
< 0 [a, b]
=== 0 [a, b] unaltered
*/