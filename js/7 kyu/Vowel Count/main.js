/*

Description:

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

*/

// Solution
function getCount(str) {
    let array= str.split('')
    let count = 0
    let vowels = ['a','e','i','o','u']
    array.forEach((element) =>{
      if(vowels.includes(element)){
        count++
      }
    })
    return count;
  }