/*
Description:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

//Solution:
function getDivisorsCnt(n) {
  let totalDivisors = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      totalDivisors += 1;
    }
  }
  return totalDivisors;
}

//chatGPT helped me optimize the code
function getDivisorsCnt(n) {
  let totalDivisors = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // If i is a divisor, check if the corresponding factor is also a divisor
      if (n / i === i) {
        totalDivisors += 1; // i is the square root, count only once
      } else {
        totalDivisors += 2; // i and n/i are divisors
      }
    }
  }

  return totalDivisors;
}
