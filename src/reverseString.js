/* eslint-disable require-jsdoc */
function reverseString(string) {
  let reversed = '';
  if (typeof string !== 'string') {
    return 'Not a string';
  }
  if (Array.isArray(string)) {
    return 'Not a string';
  }
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
module.exports = reverseString;
