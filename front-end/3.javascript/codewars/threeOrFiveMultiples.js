const number = 10;

/*
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution(number));

// alternatives

function solution2(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

function solution3(number){
  return number < 3 ? 0
   : [...Array(number).keys()]
    .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0 )
    .reduce((a, b) => a + b )

}
