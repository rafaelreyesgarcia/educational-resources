class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

let user = new User('rafael');
user.sayHi();

console.log(typeof User);
console.log(User === User.prototype.constructor);

// rewritting the class as pure function

function FuncUser(name) {
    this.name = name;
}
// function prototype has constructor property by default

FuncUser.prototype.sayHi = function() {
    console.log(`hello! My name is ${this.name}`);
}

let newUser = new FuncUser('kelley');
newUser.sayHi();

// User(); not possible only with new User();

console.log(User);
console.log(FuncUser);

// class expression
// like NFE NCE named class expressions
let ClassExpression = class MyClass {
    sayHi() {
        console.log(MyClass);
    }
};

// NCE
new ClassExpression().sayHi();
// console.log(MyClass); doesn't work, not visible outisde the class expression

// dynamically create on-demand classes (class expression being used as a return value)
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    };
}

let UserDynamic = makeClass('hello');
new UserDynamic().sayHi();

class newClass {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log(`name is too short`);
        }
        this._name = value;
    }
}

let user2 = new newClass('rafael');

console.log(user2.name);

// computed property names

class Computed {
    ['say' + 'Hi']() {
        console.log('computed hello');
    }
}

new Computed().sayHi();

class Field {
    name = 'rafael';
}

let field = new Field();
console.log(field.name);
console.log(Field.prototype.name);

class Button {
    constructor(value) {
        this.value = value;
    }

    click(){
        console.log(this.value);
    }
}

let button = new Button('hello');
// problem: losing "this"
setTimeout(button.click, 0);
// solution1: arrow function wrapper
setTimeout(() => button.click(), 0);

// class field solution
class ButtonOpt {
    constructor(value) {
        this.value = value;
    }

    click = () => {console.log(this.value)};
}

let buttonOpt = new ButtonOpt('yeah!');
setTimeout(buttonOpt.click, 0);

class Animal {
    // class field
    // this.name = 'animal'; replace with
    // showName() {console.log('animal');}

    constructor(name) {
        this.name = name;
        // this.showName();
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still`);
    }
}

let animal = new Animal('dog');

class Rabbit extends Animal {
    // showName(){console.log('rabbit');}

    constructor(name, earLength) {
        super(name) = name;
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop(); 
            // calls parent stop()
        this.hide();
    }
}

let rabbit = new Rabbit('white');
rabbit.run(5);
rabbit.stop();
// rabbit.hide();

// a function call that generates the parent class

function f(phrase) {
    return class {
        sayHi() {console.log(phrase);}
    };
}

class Someone extends f('test') {}
new Someone().sayHi();

console.log(rabbit.name);

class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }
    
    // setWaterAmount(value) {if (value < 0) value = 0; this._waterAmount = value;} 
    // getWaterAmount() {return this._waterAmount;}

    constructor(power) {
        this._power = power;
        console.log(`created a coffee-machine, power: ${power}`);
    }

    get power() {
        return this._power
    }
}

let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;

// MIXINS
let sayHiMixin = {
    sayHi() {
        console.log(`hello ${this.name}`);
    },
    
    sayBye() {
        console.log(`bye ${this.name}`);
    }
}

class UserMixin {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(UserMixin.prototype, sayHiMixin);










