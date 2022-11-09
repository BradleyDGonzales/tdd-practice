import {add, subtract, multiply, divide} from './calculator.js';
test('Add two numbers', () => {
  expect(add(2, 4)).toBe(6);
});
test('Subtract two numbers', () => {
  expect(subtract(2, 4)).toBe(-2);
});
test('Add two numbers', () => {
  expect(multiply(2, 4)).toBe(8);
});
test('Divide two numbers', () => {
  expect(divide(2, 4)).toBe(0.5);
});

test('Non-numbers', () => {
  expect(add('2', '4')).toBe('One or more parameters are not numbers');
});
test('Non-numbers', () => {
  expect(subtract('2', '4')).toBe('One or more parameters are not numbers');
});
test('Non-numbers', () => {
  expect(multiply('2', '4')).toBe('One or more parameters are not numbers');
});
test('Non-numbers', () => {
  expect(divide('2', '4')).toBe('One or more parameters are not numbers');
});

