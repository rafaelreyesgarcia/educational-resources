interface IceCream{
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface Sundae extends IceCream{
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2
}

let sundaeIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true,
}

let iceCreamList: IceCreamArray;

iceCreamList = ['chocolate', 'vanilla', 'strawberry'];
let str: string = iceCreamList[0];

console.log(myIceCream.flavor);

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

