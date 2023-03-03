# intro

two ways to organize code in typescript
- namespaces
- modules

# modules

provide a way to organize and categorize code to group related code together.

you can export any declaration
- variable
- function
- class
- type alias
- interface

any file containing a top-level `import` or `export` statement is considered a module.

`export` explicitly makes a component in one module available to other modules.

`import` allows to consume the component from another module.

# export and import module components

importing a module



```ts
// single export from module
import { <component name> } from '<module name>'
// rename an import
import { <component name> as <new name> } from '<module name>'
// entire module into a single variable
import * as <variable name> from '<module name>'
```

> to run resulting javascript in browser, append `.js` file extension in the `import` statement

# compile modules

modules import each other using a module loader.

at run time module loader locates and executes all dependencies of a module before executing it.

the compiler can generate a module target appropiate for
- nodejs (commonjs)
- require.js
- UMD
- systemJs
- ES6 module-loading systems

`--module` flag when using `tsc` or in the `tsconfig.json`

when a module is compiled all dependencies are compiled as well

running a module from a webpage

```js
<script type="module" src=".\main.js"></script>
```

# access external type libraries

external libraries can be used with `requires` statement

in typescript they're accessed by using `import` statement

typescript compiler can raise an error message when attempting to use a library that doesn't have type definitions.

many don't have type definitions.

`npm install --save-dev @types/<library-name>`

definitelyTyped will provide the name of the library to install and other implementation details

`npm install dotenv`

`npm install --save-dev @types/node @types/dotenv`

# knowledge check

1. Which of the following is possible when using namespaces, but not when using modules?

Compile multiple TypeScript files into a single JavaScript file.

The `--outFile `compiler option combines multiple namespace files to a single JavaScript file.

2. How do you use use a component from one module file in another module file?

Use the import keyword.

3. What is the recommended code-organizing mechanism for new ES6-compliant projects?

Modules are the recommended code-organizing mechanism for ES6-compliant projects because they offer benefits that namespaces do not have.

# additional resources

https://www.typescriptlang.org/docs/handbook/modules.html

https://www.typescriptlang.org/docs/handbook/module-resolution.html

https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

https://github.com/DefinitelyTyped/DefinitelyTyped

