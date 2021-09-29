/*an object in programming is an entity that has properties. Each property defines a characteristic of the object.*/
const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic",
};

/*Accessing an Object’s Properties*
After creating an object, you can access the value of its properties using dot notation 
such as myObject.myProperty.
*/
console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

/*Accessing an object’s property is an expression that produces a value. 
Such an expression can be included in more complex ones. For example,
here’s how to show our pen properties in one statement. */
console.log(`i love this ${pen.color} ${pen.brand} ${pen.type} pen so much`);

//modify the property
pen.color = "red"; // Modify the pen color property
console.log(`i love this ${pen.color} ${pen.brand} ${pen.type} pen so much`);

//dynamically add new properties to an already created object

pen.price = "2.5"; // Set the pen price property

console.log(`My pen costs ${pen.price}`);
