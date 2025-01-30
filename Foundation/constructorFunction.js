function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry"); // if you have to create a object you need to define new keyword
// console.log(myCar);

let myNewCar = new Car("Honda", "Accord");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type} tea`;
  };
}

let myTea = new Tea("green");
// console.log(myTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("dog");
// console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new");
  }
  this.name = name;
}

let coffee = new Drink("coffee");
let chai = new Drink("chai");
