/*

Liskov Substitution Principle (LSP)
- You should be able to replace a module/function with a substitute without breaking behavior.
- Substitutes should follow the same contract.
*/

// Bad
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

// Good
function createFlyingBird(name) {
  return {
    fly: () => console.log(name + " is flying"),
    layEgg: () => console.log(name + " laid an egg"),
  };
}

function createNonFlyingBird(name) {
  return {
    layEgg: () => console.log(name + " laid an egg"),
  };
}

const sparrow = createFlyingBird("Sparrow");
const penguin = createNonFlyingBird("Penguin");

// Works without error
sparrow.fly();
penguin.layEgg();

/***    
example 2, voilating liskov rule */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width; // force height = width
  }

  setHeight(height) {
    this.height = height;
    this.width = height; // force width = height
  }
}

// Function that expects a rectangle
function increaseHeightBy(rect, extraHeight) {
  rect.setHeight(rect.height + extraHeight);
  return rect.getArea();
}

// Let's use a Rectangle
const rect = new Rectangle(5, 10);
console.log("Rectangle Area:", increaseHeightBy(rect, 5)); // 5 * 15 = 75

// Now use a Square
const square = new Square(5, 5);
console.log("Square Area:", increaseHeightBy(square, 5)); // Expected 5 * 10 = 50, but it's 10 * 10 = 100

// Fix
class Shape {
  getArea() {
    throw new Error("Not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}
