// Split a string based upon a separator (similar to String.prototype.split).

function stringSplitter(string) {
  //base case
  let emptyArray = [];
  let stringContainsSpace = string.includes(" ");
  let findWhereWordEnds = string.indexOf(" ");
  let getEntireWordString = string.substring(0, findWhereWordEnds);
  let getRemaindingWord = getEntireWordString.substring(findWhereWordEnds, -1);
  console.log(string);
  if (stringContainsSpace === false) {
    return emptyArray;
  } else {
    emptyArray.push(getEntireWordString);
    //call the function
    return stringSplitter(getRemaindingWord);
  }
}

stringSplitter("Hello World Yo Bro Done Man");
