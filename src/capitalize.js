/* eslint-disable require-jsdoc */
function capitalize(string) {
  if (typeof string !== 'string') {
    return 'Not a string';
  }
  if (Array.isArray(string)) {
    return 'Not a string';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
