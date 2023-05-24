function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(char => vowels.indexOf(char.toLowerCase()) === -1).join('');
}

// solution 2

function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, '');
}

function disemvowel3(str) {
  const vowels = 'aeiou';

  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}
