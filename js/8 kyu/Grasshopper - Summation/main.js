/*
Description:
Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

*/

//SOLUTION:

function summation(num) {
  let x = 0;
  for (let i = 0; i <= num; i++) {
    x += i;
  }
  return x;
}

function summation(num) {
  let x = [];
  for (let i = 1; i <= num; i++) {
    x.push(i);
  }
  let result = x.reduce((acc, curr) => acc + curr, 0);
  return result;
}
