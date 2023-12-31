const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
};

console.log(
  `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`
);

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

console.log(
  `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`
);

//methods
/*
In the above code, we had to write lengthy console.log statements each time to show our character state. 
There’s a cleaner way to accomplish this.*/

//adding a method to object!

/*The describe() function takes an object as a parameter. 
It accesses that object’s properties to create a description string*/

function describe(character) {
  return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}

console.log(describe(aurora));

//alternative approach
const flash = {
  name: "Flash",
  health: 120,
  strength: 100,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
  },
};

console.log(flash.describe());

/*
An object property whose value is a function is called a method. 
Methods are used to define actions for an object. A method adds some behavior to an object.*/

/*
To show the character description, we use the aurora.describe() expression instead of describe(aurora).
It makes a crucial difference:

describe(aurora) calls the describe() function with the aurora object as an argument.
The function is external to the object. This is an example of procedural programming

aurora.describe() calls the describe() function on the aurora object. 
The function is one of the object’s properties: it is a method. This is an example of object-oriented programming
To call a method named myMethod() on an object myObject, the syntax is myObject.myMethod().*/

//this keyword
/*

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength`;
  }
};
You see a new keyword: this. This is automatically set by JavaScript 
inside a method and represents the object on which the method was called.

The describe() method doesn’t take any parameters. It uses this to access the properties of 
the object on which it is called.*/
