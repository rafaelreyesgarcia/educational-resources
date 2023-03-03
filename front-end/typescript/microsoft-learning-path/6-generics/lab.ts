class DataStore<T> {

  private _data: Array<T> = new Array(10);

  AddOrUpdate(index: number, item: T) {
    if(index >=0 && index <10) {
      this._data[index] = item;
    } else {
      alert('Index is greater than 10')
    }
  }
  GetData(index: number) {
    if(index >=0 && index < 10) {
      return this._data[index];
    } else {
      return
    }
  }
}

let cities = new DataStore<string>();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.

let empIds = new DataStore<number>();
empIds.AddOrUpdate(0, 50);
empIds.AddOrUpdate(1, 65);
empIds.AddOrUpdate(2, 89);
console.log(empIds.GetData(0));


// TODO Test items as objects.
type Pets = {
  name: string;
  breed: string;
  age: number
}

let pets = new DataStore<Pets>();

pets.AddOrUpdate(0, {name: 'coco', breed: 'bichon frise', age: 4});
pets.AddOrUpdate(0, {name: 'pepe', breed: 'golden doodle', age: 5});

console.log(pets.GetData(1));