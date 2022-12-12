console.log(Number.MAX_SAFE_INTEGER);

// operations with a fractional results truncate the number
console.log(5n / 3n);

// explicit conversion between Number and BigInt is required
console.log(BigInt(19) / 6n);

// only abstract equality is true
console.log(1n === 1);
console.log(1n == 1);

// number and bigint can be compared

console.log(1n < 2);

// numbers and bigint values can be mixed in arrays and sorted

const mixed = [4n, 6, -12n, 10, 4, 0, 0n];

// will fail
// mixed.sort((a, b) => a - b);

console.log(mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));

// comparing a wrapped bigint behaves similar to comparing different object instances, only being equal the same instance and references to it

const big0 = Object(0n);
const big0Reference = big0;
const big0Different = Object(0n);

console.log(big0 === big0Reference);
console.log(big0 === big0Different);

// conditionals

console.log(0n || 12n);

const isTruthy = Boolean(0n);

// patching BigInt.prototype
BigInt.prototype.toJSON = function () {
  return this.toString();
};

console.log(JSON.stringify({a: 1n}));


