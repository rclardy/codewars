/*
Description: 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

//SOLUTION:

let str = 'This is an example!';

function reverseWords(str) {
  let strArr = str.split(' ').map((word) => {
    return word.split('').reverse().join('');
  });
  return strArr.join(' ');

  // Go for it
}
