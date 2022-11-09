const caesarCipher = require('./caesarCipher.js');


test('Basic test case', () => {
  expect(caesarCipher('attackatdawn', 1)).toBe('buubdlbuebxo');
});
test('Key is greater than 25', () => {
  expect(caesarCipher('asdfghjkl', 50)).toBe('Invalid key, ensure key is between 0 - 24');
});
test('Shift greater than 1', () => {
  expect(caesarCipher('wewillattackatdawn', 16)).toBe('mumybbqjjqsaqjtqmd');
});
test('White spaces', () => {
  expect(caesarCipher('hey look there is some whitespace on this sentence', 12)).toBe('tqk xaaw ftqdq ue eayq itufqebmoq az ftue eqzfqzoq');
});
test('Capitalized letters', () => {
  expect(caesarCipher('This will test for Upper CASE LeTtERS', 16)).toBe('Jxyi mybb juij veh Kffuh SQIU BuJjUHI');
});
test('Punctuations are ignored', () => {
  expect(caesarCipher('This, parameter argument, should ignore punctuations! I love using punctuations. ?!@#$%^&*()', 24))
      .toBe('Rfgq, nypykcrcp ypeskclr, qfmsjb gelmpc nslarsyrgmlq! G jmtc sqgle nslarsyrgmlq. ?!@#$%^&*()');
});
test('Shift of zero', () => {
  expect(caesarCipher('FOR WHATEVER REASON! This should not affect our string :D see the smiley face', 0))
      .toBe('FOR WHATEVER REASON! This should not affect our string :D see the smiley face');
});
test('String parameter is not a string', () => {
  expect(caesarCipher([123], 0)).toBe('Invalid string parameter');
});
