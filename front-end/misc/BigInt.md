# BigInt

numeric values larger than primitive numbers.

## number safety

`Number.MAX_SAFE_INTEGER` constant that represents the max safe integer in JS **(2^53-1)**

**double precision floating point format** only has 52 bits to represent the *mantissa* 

- it can only safely represent integers between -(2^53-1) and 2^53 -1 (±9,007,199,254,740,991)

**safe** refers to the ability to represent integers exactly and to compare them correctly.

- exactly represented as an IEEE-754 double precision number
- IEEE-754 representation can't be the result of rounding any other integer to fit the representation

2^53 - 1 it can be exactly represented and no other integer rounds to it

2^53 is not safe, the integer 2^53 + 1 can't be directly represented because it rounds to 2^53 under *round-to-nearest* and *round-to-zero*

handling values larger or smaller than ~9 quadrillion with full precision requires a library

`Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` will be true

`Number.isSafeInteger(testValue)`
determines if the provided value is a safe integer

returns a boolean of `true` if `testValue` is true

```js
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 -1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

**significand** can be called
- mantissa
- coefficient
- argument
- fraction
- characteristic

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991

```

`Number.EPSILON` is `2^-52` 

both `MAX_SAFE_INTEGER` and `EPSILON` are derived from the width of the mantissa, which is 53 bits (highest bit always being 1)

multiplying them will give a value close but not equal to 2

## bigint description

`n` is appended to the end of an integer literal or by calling `BigInt()` without `new` operator

```js


```

can't be used with `Math` methods or mixed with `Number` values in operations, they must be coerced to the same type

coercion might cause precision to be lost when coercing to `Number`

a `BigInt` can be wrapped in an object

```js
Object(1n);
```

`+ * - % **` operators are supported by `BigInt`

all bitwise operators are supported as well except zero-fill right shift `>>>` as every `BigInt` value is signed

## conditionals

same conversion rules as numbers when
- converted to a boolean via `Boolean()`
- logical operators 
- within conditional tests

`0n` is falsy, everything else are true values

## coercion

built-in operations that expect `BigInt` will coerce their arguments to `BigInts` 

- `BigInt` is returned as-is
- `undefined` `null` throw
- true is `1n` false is `0n`
- strings are converted by parsing them as if they hold an integer literal
- `Number` throw to prevent implicit coercion and cause precision loss
- `Symbol` throws
- `Object` is first converted to a primitive `[@@toPrimitive]`

## constructor

`BigInt()`

`BigInt.asIntN()`
clamps a bigint to a signed integer value

`BigInt.asUintN()`
bigint is converted to unsigned integer value

## instance methods

`toLocaleString` 
returns a string with a language sensitive representation of the bigint

`toString`
string represents bigint value in the specified radix

`valueOf`
returns bigint value

## cryptography

operations supported on BigInt values are not constant-time so are vulnerable to **timing attacks**

javascript bigints are dangerous without mitigating factors

using `JSON.stringify()` with a bigint will throw `TypeError` 

`BigInt`s aren't serialized in JSON by default

JSON tries to call `BigInt.toJSON()` method so you can implement your own custom method

```js
// own stringify JSON version
BigInt.prototype.toJSON = function () {
  return this.toString();
};

console.log(JSON.Stringify({a: 1n}));
```

