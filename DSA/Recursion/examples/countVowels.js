// iterative approach

const isVowel = (char) => {
  const lowerCasedChar = char.toLowerCase();
  const vowels = "aeiou";

  if (vowels.indexOf(lowerCasedChar) !== -1) {
    return true;
  } else {
    return false;
  }
};

const countVowels = (string) => {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (isVowel(string[index])) {
      count++;
    }
  }
  return count;
};

// console.log(countVowels("rakshit"));

// recursive approach

const countVowelRecursively = (string, stringLength) => {
  if (stringLength == 1) {
    return Number(isVowel(string[0]));
  }

  return (
    countVowelRecursively(string, stringLength - 1) +
    isVowel(string[stringLength - 1])
  );
};

const myString = "hello";
console.log(countVowelRecursively("hello", myString.length));
