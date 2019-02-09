// 1. Longest word

function longestWord(sentence) {
  const wordsArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordsArr.sort((a, b) => b.length - a.length);
  const longest = sorted.filter(w => w.length === sorted[0].length);

  if (longest.length === 1) {
    return longest[0];
  } else {
    return longest;
  }
}

// 2. Array chunking

function chunkArray1(arr, size) {
  const chunked = [];

  let i = 0;
  while (i < arr.length) {
    chunked.push(arr.slice(i, i + size));
    i += size;
  }

  return chunked;
}

function chunkArray2(arr, size) {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
}

function chunkArray3(arr, size) {
  const chunked = [];

  arr.forEach(val => {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunked;
}

function chunkArray4(arr, size) {
  const chunked = [];

  while (arr.length >= size) {
    chunked.push(arr.splice(0, size));
  }

  chunked.push(arr.splice(0));
  return chunked;
}
