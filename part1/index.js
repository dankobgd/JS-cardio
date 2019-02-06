// 1. Reverse a string

function reverseString1(s) {
  return s
    .split('')
    .reverse()
    .join('');
}

function reverseString2(s) {
  let reverse = '';
  for (let i = s.length - 1; i >= 0; i--) {
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
  s.split('').forEach(char => (reverse = char + reverse));
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
  return [...s]
    .map((char, i, arr) => {
      return arr[arr.length - 1 - i];
    })
    .join('');
}

function reverseString7(s) {
  let reverse = '';
  [...s].map((char, i) => (reverse = char + reverse));
  return reverse;
}

function reverseString8(s) {
  return [...s].reduce((rev, char) => char + rev, '');
}

function reverseString9(s) {
  if (s === '') return s;
  return reverseString9(s.slice(1)) + s[0];
}

// 2. Palindrome

function palindrome1(s) {
  const tmp = [...s]
    .filter(char => {
      return char !== ' ' && char !== '.' && char !== ',' && char !== '?' && char !== '!';
    })
    .join('')
    .toLowerCase();

  return tmp === reverseString9(tmp);
}

function palindrome2(s) {
  const tmp = s.replace(/[ .,!?]/g, '').toLowerCase();
  return tmp === reverseString9(tmp);
}

function palindrome3(s) {
  const mappings = {
    ' ': '',
    '.': '',
    ',': '',
    '!': '',
    '?': ''
  };

  const re = new RegExp(`[${Object.keys(mappings).join('')}]`, 'g');
  const tmp = s.replace(re, m => mappings[m]).toLowerCase();

  return tmp === reverseString9(tmp);
}

// 3. Reverse an integer

function reverseInt(n) {
  const str = n.toString();
  return parseInt(reverseString8(str), 10) * Math.sign(n);
}

function reverseInt2(n) {
  let reversed = 0;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversed;
}

// 4. Capitalize letters

function capitalize1(s) {
  const strArr = s.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(' ');
}

function capitalize2(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

function capitalize3(s) {
  return s.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// 5. Max occuring character in a string

function maxChar1(s) {
  const charMap = {};
  let max = 0;
  let maxOccuringChar = '';

  s.split('').forEach(char => {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  });

  Object.keys(charMap).forEach(key => {
    if (charMap[key] > max) {
      max = charMap[key];
      maxOccuringChar = key;
    }
  });

  return {
    maxChar: maxOccuringChar,
    occurence: max
  };
}

function maxChar2(s) {
  const sorted = s.split('').sort();
  const max = {char: '', count: 0};
  const current = {char: '', count: 0};

  sorted.forEach(char => {
    if (current.char === char) {
      current.count++;
    } else {
      if (max.count < current.count) {
        max.char = current.char;
        max.count = current.count;
      }
      current.char = char;
      current.count = 0;
    }
  });

  return {
    maxChar: max.char,
    occurence: max.count
  };
}

// 6. Fizzbuzz

function fizzbuzz1() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
}

function fizzbuzz2() {
  for (let i = 0; i <= 100; i++) {
    let a = i % 3 ? (i % 5 ? i : 'Buzz') : i % 5 ? 'Fizz' : 'FizzBuzz';
    console.log(a);
  }
}
