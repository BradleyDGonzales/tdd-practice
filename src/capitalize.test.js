const capitalize = require('./capitalize.js');

test('First letter is capitalized', () => {
  expect(capitalize('test')).toBe('Test');
});
test('Parameter is not a string (Number)', () => {
  expect(capitalize(1)).toBe('Not a string');
});
test('Parameter is not a string (Array)', () => {
  expect(capitalize([1, 2, 3])).toBe('Not a string');
});
test('Special character', () => {
  expect(capitalize(`"index.html"`)).toBe(`"index.html"`);
});

