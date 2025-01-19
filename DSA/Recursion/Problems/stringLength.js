function stringLength(string) {
  if (string === "") {
    return 0;
  }

  return 1 + stringLength(string.substring(1));
}

console.log(stringLength("rakshit"));
