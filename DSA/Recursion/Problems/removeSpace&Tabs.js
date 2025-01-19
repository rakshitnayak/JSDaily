// iterartive approach
function removeST(string) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if ((char !== " ") & (char !== "\t")) {
      result += char;
    }
  }
  return result;
}

console.log(removeST("    this is  rakshit"));

// recursive apporach
function removeSTRecursively(string) {
  if (string.length === 0) {
    return "";
  }
  let firstChar = string[0];
  let restOfString = string.slice(1);

  if (firstChar === " " || firstChar === "\t") {
    return removeSTRecursively(restOfString);
  }

  return firstChar + removeSTRecursively(restOfString);
}

console.log(removeSTRecursively("    this is \trakshit"));
