// Split a string based upon a separator (similar to String.prototype.split).

function stringSplitter(string, array) {
  //Determine if we need to split string
  let stringContainsSpace = string.includes(" ");
  //Find where word ends and grab that index
  let findWhereWordEnds = string.indexOf(" ");
  let firstWordOfString = string.substring(0, findWhereWordEnds);
  let remainingPartOfString = string.substring(findWhereWordEnds + 1);
  //base case
  if (stringContainsSpace === false) {
    array.push(string);
    return array;
  } else {
    array.push(firstWordOfString);
    //call the function
    return stringSplitter(remainingPartOfString, array);
  }
}

stringSplitter("Lets get out of this recurcion", []);
