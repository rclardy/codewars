/* 
Description:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

//Solution:
function cockroachSpeed(s) {
  const convertionEquation = (1000 * 100) / 3600;
  return Math.floor(s * convertionEquation);
}

//Commented out

function cockroachSpeed(s) {
  // Conversion factor: 1 km/h = (1000 * 100) cm/s / 3600 s
  const conversionFactor = (1000 * 100) / 3600;

  // Convert speed from km/h to cm/s
  const speedInCmPerSecond = s * conversionFactor;

  // Round down the result to the nearest integer using Math.floor
  const roundedSpeed = Math.floor(speedInCmPerSecond);

  // Return the rounded speed value
  return roundedSpeed;
}
