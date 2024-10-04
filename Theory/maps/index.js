let myMap = new Map();

myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(3, "four");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`key is ${key}`);
}

for (let value of myMap.values()) {
  console.log(`value is ${value}`);
}

for (let [key, value] of myMap) {
  console.log(`key is ${key} & value is ${value}`);
}

// for each will always give value first
myMap.forEach((val, key) => {
  console.log(`${val} is val & ${key} is key`);
});

// will delete map with value 2
myMap.delete(2);

const a = myMap.get(0);
console.log(a);
