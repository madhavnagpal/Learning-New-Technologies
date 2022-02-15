'use strict';
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(_fullName) {
    if (_fullName.includes(' ')) this._fullName = _fullName;
    else alert('Please enter a full name');
  }
}

const jessica = new Person('jessica darling', 1998);

/*

Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(_value) {
    this.speed = _value * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`speed after acceleration: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`speed after brake: ${this.speed}`);
  }
}

const one = new Car('One', 120);
