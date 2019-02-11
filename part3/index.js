// 1. Add all numbers

function addNumbers1() {
  const args = Array.prototype.slice.call(arguments);
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

function addNumbers2(...args) {
  return args.reduce((a, b) => a + b);
}

// 2. Sum all primes

function sumPrimes(num) {
  let sum = 0;

  function isPrime(val) {
    for (let i = 2; i < val; i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// 3. Seek and destroy

function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

// 4. Sort by height

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

// 5. Missing letters

function missingLetters(s) {
  let compare = s.charCodeAt(0);
  let missing;

  s.split('').map((char, i) => {
    if (s.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// 6. Even and odd sums

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return {
    evenSum,
    oddSum
  };
}
