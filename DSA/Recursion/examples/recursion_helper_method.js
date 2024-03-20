/** 
Helper method recursion is just a pattern where we have a outer function which is not recursive which calls 
inner function which is recursive

*/
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    console.log(helperInput, "!!!");
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([3, 5, 8, 6, 7, 9]));
