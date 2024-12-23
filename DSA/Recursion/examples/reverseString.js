function reverseString(string) {
  if (string === "") {
    return string;
  }

  const reverse = reverseString(string.substring(0, string.length - 1));
  return string[string.length - 1] + reverse;
}

console.log(reverseString("hello"));
console.log(reverseString("roopin"));
console.log(reverseString("rakshit"));
