/* eslint-disable require-jsdoc */
export function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'One or more parameters are not numbers';
  }
  if (Array.isArray(x, y)) {
    return 'One or more parameters are not numbers';
  }
  return x + y;
}
export function subtract(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'One or more parameters are not numbers';
  }
  if (Array.isArray(x, y)) {
    return 'One or more parameters are not numbers';
  }
  return x - y;
}
export function divide(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'One or more parameters are not numbers';
  }
  if (Array.isArray(x, y)) {
    return 'One or more parameters are not numbers';
  }
  return x / y;
}
export function multiply(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'One or more parameters are not numbers';
  }
  if (Array.isArray(x, y)) {
    return 'One or more parameters are not numbers';
  }
  return x * y;
}
