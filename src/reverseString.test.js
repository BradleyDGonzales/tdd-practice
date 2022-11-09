const reverseString = require('./reverseString.js');

test('Reverses a string', () => {
  expect(reverseString('string')).toBe('gnirts');
});
test('Reverses a sentence', () => {
  expect(reverseString('This is a test')).toBe('tset a si sihT');
});
test('Reverses a sentence with special characters', () => {
  expect(reverseString('@!( Special Characters')).toBe('sretcarahC laicepS (!@');
});
test('Not a string (Number)', () => {
  expect(reverseString(1)).toBe('Not a string');
});
test('Not a string (Array)', () => {
  expect(reverseString([1, 2, 3])).toBe('Not a string');
});
test('Not a string (Boolean)', () => {
  expect(reverseString(true)).toBe('Not a string');
});
