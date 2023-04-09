# singleton

classes that can be instantiated once and accessed globally, shared throughout an application.

a new instance returns a new reference of a class

`Object.freeze` ensures that consuming code can't modify the singleton.

properties on a frozen instance can't be added or modified.

when exporting a counter and updating it in separate components, the updates will be reflected in all components.

restricting one instance can save memory space.

singletons are considered and anti-pattern.

using a plain object achieves the same as using a class.

objects are passed by reference.

testing a singleton can be tricky as modifications to the global instance can happen anywhere.

global variables is generally considered a bad design decision as global scope pollution can accidentally ovewrite the value of a global variable.

global state in react is achieved using redux or react context instead of singletons.

these tools provide a read-only state rather than a mutable state.

in redux only pure function *reducers* can update state after a component has sent an *action* through a *dispatcher*.