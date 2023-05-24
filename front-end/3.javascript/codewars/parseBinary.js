function binaryToNumber(arr) {
  return parseInt(arr.join(''), 2);
}

binaryArray = [
  1, 1, 1, 1
];

console.log(binaryToNumber(binaryArray));

