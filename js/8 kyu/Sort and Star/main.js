/*
Description:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

//Solution:

function twoSort(arr) {
  const alphabet = {};
  for (let i = 97; i <= 122; i++) {
    //ASCII codes for lowercase letters
    alphabet[String.fromCharCode(i)];
  }
  arr.sort();

  const firstString = arr[0];

  let result = '';
  for (let i = 0; i < firstString.length; i++) {
    if (i !== 0) {
      result += '***';
    }
    result += firstString[i];
  }
  return result;
}
