/*
Description:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/

//Solution:
function isIsogram(str) {
  let strArry = str.toLowerCase().split('');
  for (let i = 0; i < strArry.length(); i++) {
    for (let j = i + 1; j < strArry.length(); j++) {
      if (strArry[i] === strArry[j]) {
        return false;
      }
    }
  }
  return true;
}

//Solution 2

function isIsogram(str) {
  let strArry = str.toLowerCase().split('');
  let seen = {};
  for (let i = 0; i < strArry.length; i++) {
    let char = strArry[i];
    if (seen[char]) {
      return false;
    }
    seen[char] = strArry[i];
  }
  return true;
}
