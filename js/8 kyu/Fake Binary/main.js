/*
Description:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//Solution
function fakeBin(x) {
  let xArr = x.split('');
  let newX = '';
  xArr.forEach((el) => {
    if (Number(el) < 5) {
      newX += String('0');
    } else {
      newX += String('1');
    }
  });
  return newX;
}
