/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

//SOLUTION

function nameShuffler(str) {
  let nameArr = str.split(' ');
  return nameArr.reverse().join(' ');
}
