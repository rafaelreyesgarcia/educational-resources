# module pattern

organizes code into distinct code blocks (modules)

modules export properties and behaviors

both modules and classes are mechanisms to organize and encapsulate code

basic module structure

```js
(function() {
  // variable declarations
  // function declarations
  // still access to globals
}());
```

- closure provides level of encapsulation to private variables and the functions it contains.

- closure provides access to other variables that where in scope when the closure was declared

```js
// basic javascript module
// singleton pattern (one module instance accessed via myModule)
var myModule = (function() {
  var _myModule = {};

  var _aPrivateVariable = 'private text';
  
  _myModule.myFunction = function() {
    return _aPrivateVariable;
  }

  _myModule.aPublicVariable = 'public text';
  _aPrivateVariable = value;

  return _myModule;

})
```