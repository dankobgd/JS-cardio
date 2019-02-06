// 1. Reverse a string

function reverseString1(s) {
  return s.split('').reverse().join('');
}

function reverseString2(s) {
  let reverse = '';
  for (let i = s.length - 1; i >= 0; i-- ) {
    reverse = reverse + s[i];
  }
  return reverse;
}

function reverseString3(s) {
  let reverse = '';
  for (let i = 0; i <= s.length - 1; i++) {
    reverse = s[i] + reverse;
  }
  return reverse;
}

function reverseString4(s) {
  let reverse = '';
  s.split('').forEach(char => reverse = char + reverse);
  return reverse;
}

function reverseString5(s) {
  let reverse = '';
  for (let char of s) {
    reverse = char + reverse;
  }
  return reverse;
}

function reverseString6(s) {
  return [...s].map((char, i, arr) => {
    return arr[arr.length - 1 - i];
  }).join('');
}

function reverseString7(s) {
  let reverse = '';
  [...s].map((char, i) => reverse = char + reverse);
  return reverse;
}

function reverseString8(s) {
  return [...s].reduce((rev, char) => char + rev, '');
}

function reverseString9(s) {
  if (s === '') return s;
  return reverseString9(s.slice(1)) + s[0];
}

