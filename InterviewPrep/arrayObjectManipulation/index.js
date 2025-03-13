/** Return latest updated key value (asked in lowes)

const stateChanges = [
  { key: "count", value: 1 },
  { key: "theme", value: "dark" },
  { key: "count", value: 3 },
  { key: "theme", value: "light" },
  { key: "count", value: 4 },
];

o/p :
[
  { key: "count", value: 4 },
   { key: "theme", value: "light" },
 ]

*/

const stateChanges = [
  { key: "count", value: 1 },
  { key: "theme", value: "dark" },
  { key: "count", value: 3 },
  { key: "theme", value: "light" },
  { key: "count", value: 4 },
];

function findLatest(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const { key, value } = arr[i];
    let existingIndex = result.findIndex((item) => item.key == key);

    if (existingIndex !== -1) {
      result[existingIndex].value = value;
    } else {
      result.push({ key, value });
    }
  }

  return result;
}

console.log(findLatest(stateChanges));

/** 
 
Find Duplicate Values in an Array of Objects

const items = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "apple" },
  { id: 4, name: "orange" },
];

Expected output:
[
  { id: 1, name: "apple" },
  { id: 3, name: "apple" },
] 

*/
const items = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "apple" },
  { id: 4, name: "orange" },
];

function findDuplicates(arr) {
  const noOfItems = arr.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  return arr.filter((item) => noOfItems[item.name] > 1);
}

console.log(findDuplicates(items));

/**
Flatten array
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
Expected output:
[1, 2, 3, 4, 5, 6, 7]
*/

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
