# intro

typescript specific way to organize and categorize code.

namespaces allow to group
- variables
- functions
- interfaces
- classes

related to business rules in one namespace and security in another.

code inside a namespace is pulled from global scope into namespace scope.

namespaces are useful to
- reduce amount of code in global scope
- provide context for nammes
- enhance reusability

# single file namespaces

`namespace` keyword defines a namespace.

multiple namespaces are allowed in a single file.

functions and classes can be defined inside namepsaces and are scoped to it and removed from gloabal scope.

`export` keyword will make the function or class available outside the namespace.

without `export` component is only available inside namespace.

use a component within a namespace, prefix the component with the namespace component.

nested namespaces are possible

`import` keyword creates an alias to shorten and simplify code

# organizing code in multi-file namespaces

extend namespaces across files.

`reference` tags must be added so the compiler knows the relationship between files.

- interfaces.ts (declares interfaces)
- functions.ts (declares functions that implement the interfaces)
- main.ts (calls functions and represents main source code of application)

when there is a reference to more than one file, start referencing the highest-level namespace as typescript uses this order when compiling.

the compiler examines `reference` statements and produces one js file for each input file.

`<script>` should be used on webpage.

`tsc --outFile main.js main.ts` would produce a single js file.

# design considerations

module benefits
- declare dependencies
- better code reuse
- strong isolation
- hide internal statements
- provide better tooling for bundling
- recomended over namespaces as they are natively compatible with node
- top-down javascript flow issues

> not recommended to combine namespaces and modules in the same project

# knowledge check

1. What happens when you add code to a namespace?

Namespaces remove declarations form the global namespace, providing a context for names and helping to reduce naming collisions.

2. How do you make a component available outside the scope of a namespace?

Adding the export keyword makes the component available for use outside of the namespace.

3. What is the option that tells the TypeScript compiler to output multiple files using and containing namespaces into a single JavaScript file?

`--outfile`

# additional reading

https://www.typescriptlang.org/docs/handbook/namespaces.html

https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

