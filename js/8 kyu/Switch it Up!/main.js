/*
Description:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
*/

//Solution

function switchItUp(number) {
  const numbers = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    0: 'Zero',
  };
  return numbers[number];
  //Write your own Code!
}
