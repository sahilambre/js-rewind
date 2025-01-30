let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make}  is started in year ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 30);

// prototypal chain

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.sahil = function () {
  return `custom method ${this}`;
};

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.sahil());

// classes and inheritance

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is is from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make}: this in an inheritance example`;
  }
}

let myCar = new Car("tesla", "model x");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("toyota", "camry");
// console.log(vehOne.make);

// ! encapsulation : restrict direct acccess to object data

class BankAccount {
  #balance = 10;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());
