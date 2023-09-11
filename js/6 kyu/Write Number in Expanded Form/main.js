/*
Description:
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

//Solution
function expandedForm(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;
  const bigNums = [];
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    if (digit !== 0) {
      const longForm = digit * Math.pow(10, numDigits - i - 1);
      bigNums.push(longForm.toString());
    }
  }
  return bigNums.join(' + ');
  // Your code here
}
