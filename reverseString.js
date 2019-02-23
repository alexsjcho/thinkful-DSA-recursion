// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseAString(string) {
  if (string === "") {
    return "";
  } else {
    console.log(string.substr(1), string[0]);
    return reverseAString(string.substr(1)) + string[0];
  }
}

reverseAString("Hello");
