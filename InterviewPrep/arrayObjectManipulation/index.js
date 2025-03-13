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
