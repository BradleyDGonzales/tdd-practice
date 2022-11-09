const analyzeArray = require('./analyzeArray.js');


test('Returns correct values', () => {
  expect(analyzeArray([13, 55, -214, 77, -54, -3291])).toEqual({
    average: -569,
    min: -3291,
    max: 77,
    length: 6,
  });
});
test('Parameter is not an array', () => {
  expect(analyzeArray('123')).toBe('Parameter is not an array');
});
test('Parameter is an array but contains non-numbers', () => {
  expect(analyzeArray([10, 23, -13, Infinity, true, '391'])).toBe('Parameter contains one or more non-numbers');
});
