/* eslint-disable require-jsdoc */
function caesarCipher(string, key) {
  let res = '';
  if (typeof string !== 'string') {
    return 'Invalid string parameter';
  }
  if (key === 0) {
    return string;
  }
  if (key > 25) {
    return 'Invalid key, ensure key is between 0 - 24';
  }
  const alpha = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  for (let i = 0; i < string.length; i++) {
    let index = '';
    if (!string[i].match(/[a-z]/i)) {
      res += string[i];
    }
    if (string[i] === string[i].toUpperCase() && string[i].match(/^[A-Z]*$/)) {
      index = alpha[string[i].toLowerCase()];
      for (const name in alpha) {
        if (alpha[name] === (index + key) % 26) {
          res += name.toUpperCase();
        }
      }
      continue;
    } else {
      index = alpha[string[i]];
    }
    for (const name in alpha) {
      if (alpha[name] === (index + key) % 26) {
        res += name;
      }
    }
  }
  return res;
}
module.exports = caesarCipher;
