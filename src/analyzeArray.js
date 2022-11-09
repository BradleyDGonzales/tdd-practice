const {setMaxListeners} = require('events');

/* eslint-disable require-jsdoc */
function calculateAverage(array) {
  let arrayAvg = 0;
  for (let i = 0; i < array.length; i++) {
    arrayAvg += array[i];
  }
  arrayAvg /= array.length;
  return arrayAvg;
}
function findMinimum(array) {
  let arrayMin = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (arrayMin > array[i+1]) {
      arrayMin = array[i+1];
    }
  }
  return arrayMin;
}
function findMaximum(array) {
  let arrayMax = array[0];
  for (let i = 0; i < array.length; i++) {
    if (arrayMax < array[i+1]) {
      arrayMax = array[i+1];
    }
  }
  return arrayMax;
}
function analyzeArray(array) {
  if (!Array.isArray(array)) {
    return 'Parameter is not an array';
  } else {
    for (const number of array) {
      if (typeof number !== 'number') {
        return 'Parameter contains one or more non-numbers';
      }
    }
  }
  array.flat();
  const arrayAvg = calculateAverage(array);
  const arrayMin = findMinimum(array);
  const arrayMax = findMaximum(array);
  const arrayLength = array.length;
  const myObj = {
    average: Math.round(arrayAvg),
    min: arrayMin,
    max: arrayMax,
    length: arrayLength,
  };
  return myObj;
}
console.log(analyzeArray([10, 23, -13, 33, -91, 391]));
module.exports = analyzeArray;
