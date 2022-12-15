# javascript object freeze

- freezing an object prevents extensions and changes all property descriptors `configurable`, `writable` to `false`
- values that are objects can still be modified unless is also frozen.
- an array can be frozen, elements can't be added or removed.
- it returns same object doesn't create a frozen copy
- the frozen object is immutable but not constant, the freeze is shallow
- the entire reference graph (direct and indirect references to objects) must reference only immutable frozen objects.
- a frozen object is immutable because the object state (values and references) are fixed.
- shallow copy lets nested objects vulnerable to property addition, removal or re-assignment
- recursive freeze each non-primitive property
- an object can't contain no cycles in the reference graph, otherwise an endless loop will be triggered.

```js
function deepFreeze(object) {
  const propNames = Reflect.ownKeys(object);

  for (const name of propNames) {
    const value = object[name];

    if ((value) && typeof value === "object" || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}
```

- still runs the risk of freezing an object that shouldn't be frozen (window)