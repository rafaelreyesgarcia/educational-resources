# introduction

overview
- typescript editor
- installation
- project setup

# overview of typescript

superset of javascript

all javascript features are enabled in typescript, typescript introduces additional rules

the type sytem identifies the type of a vcariable or parameter by using a **type hint**

type hints describe the shape of an object

static type checking catches errors before compiling them.

types allow to describe what thecode will do

types power intelligence and productivity benefits of development tools like
- intellisense
- symbol-based nagivation
- code refractoring
- find all references
- statement completion
- go to definition

```js
function addNumbers(x, y) {
  return x + y;
}

console.log(addNumbers(3, 6));
```

unique typescript features
- interfaces
- namespaces
- generics
- abstract classes
- data modifiers
- optionals
- function overloading
- decorators
- type utils
- readonly keyword

typescript strict superset of ECMAScript 2015

browsers, node and other platforms understand javascript, for that reason, typescript has to be compiled and converte to javascript. A compiler (`tsc`) or transpiler (babel, swc, sucrase) can perform this.

# install typescript compiler

install typescript library and compiler `tsc`

library can be installed by npm globally or locally to a project.

typescript requires a build step (transpiler) as most runtimes don't support typescript natively

`tsc` command in the terminal compiles all `.ts` files in the current folder.

or compile a specific file `tsc file.ts`

## compiler options

control how javascript is generated from the typescript source.

`--noImplicitAny` instructs the compiler to raise errors on expressions or declarations with an implied `any` type.

`--target` defines target version for js file

`tsc file.ts --target "ES2015"`

# typescript project setup

create a folder and a `.ts` file

## generate a tsconfig.json file

config file that defines the compiler options.

should be added in the root of the project folder.

`tsc --init` generates a tsconfig.json file with default options

change `target` option from `es2016` to `es2015`

create `build` folder

change `outDir` option from `./` to `./build`

`tsc` terminal command reads the `tsconfig.json` file and compiles javascript to the build directory

modifying and saving the `.ts` file will require to run the `tsc` command to compile the new typescript code.

## add an HTML file

html file can then import a script with the `src` attribute pointing at the `.js` file produced.

# knowledge check

1. What is the relationship between TypeScript and JavaScript?

TypeScript is a superset of JavaScript.

2. Why is it necessary to compile (or transpile) TypeScript code to JavaScript before you can use it in your applications?

TypeScript includes code features that aren't compatible with browsers.

3. What does the command `npm install -g typescript` do?

Installs the TypeScript compiler globally on the machine.

# additional reading

https://www.youtube.com/watch?v=tXK50czRbdA

https://www.typescriptlang.org/

https://github.com/microsoft/TypeScript

https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

https://code.visualstudio.com/docs/typescript/typescript-tutorial

