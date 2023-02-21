# file system

## fs module

built-in module to work with a computer file system.

module has a promises namespace so there's a promise version of all methods as this allows working with `async` to avoid nested callbacks or blocking nature of syncrhonous methods.

file structure

```
📂 stores
  📄 sales.json
  📄 totals.txt
  📂 201
  📂 202
```

```js
const fs = require("fs").promises;

const items = await fs.readdir("stores");
console.log(items); // [ 201, 202, sales.json, totals.txt ]
```

`readdir` and `readdirsync` return results in alphabetical order

reading the contents of a directory returns an array of strings describing both folders and files.

`withFileTypes` option will return an array of `Dirent` objects instead of an array of strings.

`Dirent` has `isFile` and `isDirectory` methods to determine what type of object it is

```js
const items = await fs.readdir("stores", { withFileTypes: true });
for (let item of items) {
  const type = item.isDirectory() ? "folder" : "file";
  console.log(`${item.name}: ${type}`);
  // 201: folder, 202: folder, sales.json: file, totals.txt: file
}
```

## recursion

often a program is needed that can find files in a folder tree.

a method to find folders and call itself inside those folders.

recursion happens when a method calls itself until a base case.

1. hich of the following can you do with the fs module?

List the contents of a folder

# file system exercise

setup environment

```sh
source <(curl -Ls https://aka.ms/install-node-lts)
```

# work with file paths

built-in path module and `__dirname`

node exposes the full path to current directory via `__dirname`

```js
console.log(path.join("stores", "201")); // stores/201

console.log(path.extname("sales.json")); //.json

console.log(path.parse("stores/201/sales.json"));
// { root: '', dir: 'stores/201', base: 'sales.json', ext: '.json', name: 'sales' }
```

console.log(path.dirname());

# exercise

`__dirname` constant returns the full path to current location.

`mv stores/201/sales.json stores/201/totals.json` to modify file name

# create files and directories

the fs module can
- create, delece, copy, move and manipulate files and directories programmatically

create directories with `mkdir` method

```js
const fs = require("fs").promises;
const path = require("path");

await fs.mkdir(path.join(__dirname, "stores", "201", "newDir"));

// recursion is useful if file structure doesn't exist and should be created
await fs.mkdir(path.join(__dirname, "newDir", "stores", "201", "newDir"), {
  recursive: true
});
```

try catch statements to manipulate the file or directory after opening to avoid throwing unhandled exceptions

```js
const pathToCreate = path.join(__dirname, "stores", "201", "newDirectory");

// create the salesTotal directory if it doesn't exist
try {
  await fs.mkdir(salesTotalsDir);
} catch {
  console.log(`${salesTotalsDir} already exists.`);
}

// create a file
await fs.writeFile(path.join(__dirname, "greeting.txt", "Hello World!")); // to write an empty file, pass an emtpy string

await fs.writeFile(path.join(__dirname, "greeting.txt", String()));
```

# read and write to files

files are read using the `readFile` method

```js
await fs.readFile("stores/201/sales.json"); // returns a buffer object

console.log(await fs.readFile("stores/201/sales.json"));
// <Buffer 7b 0a 20 20 22 74 6f 74 61 6c 22 3a 20 32 32 33 38 35 2e 33 32 0a 7d>

// convert the Buffer to a String object
console.log(String(bufferData));

// JSON files have a built-in parser that convert Buffers to string
const data = JSON.parse(await fs.readFile("stores/201/sales.json"));
console.log(data.total);
// 22385.32
```

returned `Buffer` object contains contents of the file in binary format.

write files using `writeFile` method

```js
const data = JSON.parse(await fs.readFile("stores/201/sales.json"));

// write the total to the "totals.json" file
await fs.writeFile("salesTotals/totals.txt"), data.total);

// totals.txt
// 22385.32
```

pass a flag to the `writeFile` method `a` to append data instead of replacing file data with `w` which is default

```js
const data = JSON.parse(await fs.readFile("stores/201/sales.json"));

// write the total to the "totals.json" file
await fs.writeFile(path.join("salesTotals/totals.txt"), `${data.total}\r\n`, {
  flag: "a"
});

// totals.json
// 22385.32
// 22385.32
```

the carriage return line feed `\r\n` tells javascript to put the data on its own line

# exercise to read and write files

fs module writes/read data to/from files

# summary

good practices
- use `promises` namespace on built-in modules to use async and await operators without blocking execution
- `try/catch` statements are good when creating directories. node throws error when trying to create a directory that already exists. `stat` method checks if a directory exists but is not on the promises namespace.
- parsing other files require extensions





