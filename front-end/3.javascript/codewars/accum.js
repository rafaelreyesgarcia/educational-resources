
function accum(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i).toUpperCase();
    let repetitions = i;

    if (repetitions > 0) {
      char += char.repeat(repetitions).toLowerCase();
    }
    result += char + '-';
  }

  return result.slice(0, -1);
}

console.log(accum('hello'));

function accum2(s) {
  return s.split('').map((char, i) => {
    return char.toUpperCase() + char.toLowerCase().repeat(i)
  }).join('-');
}

console.log(accum2('hello'));

