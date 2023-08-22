/* 
Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//Solution

function findShort(s) {
  let words = s.split(' ');
  let shortestWord = Infinity;
  words.forEach((word) => {
    if (word.length < shortestWord) {
      shortestWord = word.length;
    }
  });
  return shortestWord;
}
