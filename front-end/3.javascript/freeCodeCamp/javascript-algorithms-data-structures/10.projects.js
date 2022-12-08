// palindrome checker

/* 
eye
racecar RaceCar
a man, a plan, a canal - panama!

lowercase everything
ignore punctuations and casing (non-alphanumeric characters)
strict equality comparison with reversedStr
*/
function palindrome(str) {
  const alphanumericOnly = str.toLowerCase()
    .match(/[a-z0-9]/g);

  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}

console.log(palindrome('eye'));

// roman numeral converter

function convertToRoman(num) {
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1
  };
  let accumulator = '';

  for (const key in lookupTable) {
    const numberValue = lookupTable[key];

    while (numberValue <= num) {
      num -= numberValue;
      accumulator += key;
    }
  }

  return accumulator;
}

console.log(convertToRoman(3999));

// caesars cipher

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function rot13(str) {
  let accumulator = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isLetter = alphabet.includes(char);

    if (isLetter === false) {
      accumulator += char;
    } else {
      const charIndex = alphabet.findIndex((c) => c === char);

      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }

  return accumulator;
}

console.log(rot13("SERR PBQR PNZC"));

// telephone number validator

function telephoneCheck(str) {

  // /^1\s?\([0-9]{3}\)[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/

  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 1(555)555-5555
    /1\(\d{3}\)\d{3}-\d{4}/
  ];

  return validPatterns.some((pattern) => pattern.test(str));
}

console.log(telephoneCheck("555-555-5555"));

// cash register
const moneyMap = {
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

const getTotalCid = (cid) =>
  cid.reduce((total, [unit, amount]) => total + amount, 0);

const safelyRoundMoney = (amount) => Math.round(amount * 100) / 100;

const checkCashRegister = (price, cash, cid) => {
  const change = [];
  let changeDue = cash - price;

  if (changeDue === getTotalCid(cid)) {
    return {
      status: 'CLOSED',
      change: cid,
    };
  }

  [...cid].reverse().forEach(([unit, amount]) => {
    const unitValue = moneyMap[unit];

    if (unitValue > changeDue) {
      return;
    }

    let unitsTaken = 0;

    while (changeDue >= unitValue && amount > 0) {
      changeDue = safelyRoundMoney(changeDue - unitValue);
      amount = safelyRoundMoney(amount - unitValue);
      unitsTaken++;
    }

    change.push([unit, unitsTaken * unitValue]);
  });

  if (changeDue > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  return {
    status: 'OPEN',
    change,
  };
};
