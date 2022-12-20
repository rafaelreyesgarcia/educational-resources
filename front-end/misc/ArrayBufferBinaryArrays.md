# ArrayBuffer and binary arrays

binary data traffic is expected mostly when dealing with files (creating, uploading, downloading) or for image processing.

binary operations are high-performant

javascript binary classes
- `ArrayBuffer`
- `Uint8Array`
- `DataView`
- `Blob`
- `File`

binary data is implemented in a non-standarized way in javascript.

## ArrayBuffer

`ArrayBuffer` a reference to a fixed-length contigous memory area.

```js
let buffer = new ArrayBuffer(16); // create a buffer of length 16
alert(buffer.byteLength); // 16
```
creates a contigous memory area of 16 bytes, each byte is  pre-filled (initialized?) with zeroes.

> `ArrayBuffer` is not a type of `Array`

- immutable length (can't increase or decrease)
- it takes exactly \[length] space in memory
- to access individual bytes (elements) a *view* object is needed and `buffer[index]` is not possible.

ArrayBuffer is a memory area, stores a raw sequence of bytes.

manipulating an ArrayBuffer is done using a *view* object.

view object doesn't store anything on its own.

> the *view* object interprets the bytes stored in the `ArrayBuffer`

`Uint8Array`

- treats each byte as a separate value. 
- possible values from 0 to 255. 
- a byte is an 8-bit value. 
- value is an 8bit unsigned integer

`Uint16Array` 

- treats every 2 bytes as an integer.
- possible values 0 to 65,535.
- value is a 16bit unsigned integer.

`Uint32Array` 

- treats every 4 bytes as an integer.
- possible values from 0 to 4,294,967,295
- value is a 32bit unsigned integer.

`Float64Array` 

- treats every 8 bytes as a floating point number.
- possible values from 5.0x10^-324 to 1.8x10^308

the binary data in an `ArrayBuffer` can be interpreted as
- length = # of 8bit unsigned integers
- 16Array is length / 2
- 32Array is 16Array length / 2
- floating64Array is 32Array length / 2

`ArrayBuffer` is the core object, the raw binary data

a view object is needed to 
- write
- read
- iterate over

or any kind of operation on the bytes stored in the ArrayBuffer.

```js
let buffer = new ArrayBuffer(16); // create a buffer of length 16

let view = new Uint32Array(buffer); // treat buffer as a sequence of 32-bit integers

alert(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes per integer

alert(view.length); // 4, it stores that many integers
alert(view.byteLength); // 16, the size in bytes

// let's write a value
view[0] = 123456;

// iterate over values
for(let num of view) {
  alert(num); // 123456, then 0, 0, 0 (4 values total)
}

```

## TypedArray

there's no constructor called `TypedArray` is just an umbrella term for `Uint8Array` `Uint16Array`, etc

> `TypedArray` behaves like a regular array (has indexes and are iterable)

a typed array constructor behaves differently depending on the argument types.

```js
new TypedArray(buffer, [byteOffset], [length]);
new TypedArray(object);
new TypedArray(typedArray);
new TypedArray(length);
new TypedArray();
```

optional arguments
- `byteOffset` to from a different index than 0 default. 
- `length` to end viewing before end of the buffer default.

if an array is given as argument, it creates a typed array of the same length and copies the content.

```js
let arr = new Uint8Array([0, 1, 2, 3]);
alert( arr.length ); // 4, created binary array of the same length
alert( arr[1] ); // 1, filled with 4 bytes (unsigned 8-bit integers) with given values
```

if another TypedArray is given as argument, it creates a typed array of the same length and copies values converted to the new type if needed

```js
let arr16 = new Uint16Array([1, 1000]);
let arr8 = new Uint8Array(arr16);
alert( arr8[0] ); // 1
alert( arr8[1] ); // 232, tried to copy 1000, but can't fit 1000 into 8 bits (explanations below)
```

**out-of-bounds** behavior

if a value exceeds the size limit of a typed array there are no errors thrown but extra bits are cut-off

256 into `Uint8Array`

256 in binary is 100000000 (9 bits)
`Uint8Array` only provides 8 bits per value (range from 0 to 255)

if the bit value of a number is above 8 bits, only the rightmost (less significant) 8 bits are stored, the rest are cut off

257 the binary form is 100000001 so only the 8 less significant bits are stored 00000001 so the number 1 is stored in the array.

> the number modulo 2**8 is saved

## TypedArray methods

no `splice` as we can't delete a value as its a contigous area of memory, all we can do is assign it a zero.

no `concat` method on typed arrays

`arr.set(fromArr, [offset])` copies all elements from `fromArr` to `arr` starting at position `offset` 0 by default.

`arr.subarray([begin, end])` creates a new view of the same type from begin to end (exclusive) similar to `slice` but doesn't copy anything, just creates a new view on the given data.

## DataView

untyped view over `ArrayBuffer`

allows to access data on any offset in any format

- the constructor defines the format for typed arrays.
- `DataView` has methods `.getUint8(i)` or `.getUint16(i)` to choose a format by invoking a method rather than at contruction time.

`new DataView(buffer, [byteOffset], [byteLength])`

`buffer` is the underlying `ArrayBuffer`

unlike typed arrays, DataView doesn't create a buffer on its own.

`byteOffset` starting byte position of the view (default 0)
`byteLength` byte length of the view (default end of the buffer)

```js
// binary array of 4 bytes, all have the maximal value 255
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;

let dataView = new DataView(buffer);

// get 8-bit number at offset 0
alert( dataView.getUint8(0) ); // 255

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
alert( dataView.getUint16(0) ); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
alert( dataView.getUint32(0) ); // 4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0, 0); // set 4-byte number to zero, thus setting all bytes to 0
```

> `DataView` is great when we are storing mixed-format data in the same buffer.


