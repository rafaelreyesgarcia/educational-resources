const person = {
  name: "rafael reyes",
  age: 29,
  nationality: "Guatemalan",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm...this property doesn't exist on the target object`
      )
    } else {
      console.log(`the value of ${prop} is ${obj[prop]}`);
      return obj[prop];
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(
        `sorry you can only pass numeric values for age`
      )
    } else if (prop === 'name' && value.length < 2) {
      console.log(
        `you need to provide a valid name`
      );
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
      return true;
    }
  },
});

console.log(personProxy.name);
console.log(personProxy.age = 43);

// console.log(personProxy.nonExistent);
// console.log(personProxy.age = '44');

const proxyUsingReflect = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    return Reflect.get(obj, prop)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
    return true;
  },
})

console.log(proxyUsingReflect.age);
