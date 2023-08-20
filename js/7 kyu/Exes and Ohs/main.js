/* 
Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//Solution

function XO(str) {
  let smStr = str.toLowerCase().split('');
  let x = 0;
  let o = 0;
  smStr.forEach((el) => {
    if (el === 'x') {
      x += 1;
    } else if (el === 'o') {
      o += 1;
    } else if (el !== 'x' || el !== 'o') {
      return true;
    }
  });
  if (x === o) {
    return true;
  } else {
    return false;
  }
}
