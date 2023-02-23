/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  const isEven = number % 2 === 0;
  return (
    isEven ? 'Even' : 'Odd'
  );
}

// variations

function even_or_odd1(number) {
  return number % 2 ? "Odd" : "Even"
}

function even_or_odd2(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

function even_or_odd3(number) {
  if ( number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const even_or_odd4 = n => (n % 2) ? 'Odd' : 'Even';