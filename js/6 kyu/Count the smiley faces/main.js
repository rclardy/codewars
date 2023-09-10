/*
Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//Solution
//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validEyes = [':', ';'];
  const validNose = ['-', '~'];
  const validMouth = [')', 'D'];

  let faceCount = 0;

  arr.forEach((el) => {
    if (el.length >= 2) {
      // Check if the string has at least two characters
      const firstChar = el[0];
      const secondChar = el[1];

      if (validEyes.includes(firstChar)) {
        if (validNose.includes(secondChar)) {
          // Check for optional nose
          if (el.length === 3 && validMouth.includes(el[2])) {
            faceCount++;
          }
        } else if (validMouth.includes(secondChar)) {
          faceCount++;
        }
      }
    }
  });

  return faceCount;
}
