import { readFileSync } from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  return f2(contents);
}

export function f1(input) {
  const ranges = toRanges(input);
  let sum = 0;

  for (let i = 0; i < ranges.length; i++) {
    const invalidIds = getInvalidId(ranges[i]);

    for (let j = 0; j < invalidIds.length; j++) {
      sum += invalidIds[j];
    }
  }

  return sum;
}

export function f2(input) {
  const ranges = toRanges(input);
  let sum = 0;

  for (let i = 0; i < ranges.length; i++) {
    const invalidIds = getInvalidIdPart2(ranges[i]);

    for (let j = 0; j < invalidIds.length; j++) {
      sum += invalidIds[j];
    }
  }

  return sum;
}


export function toRanges(input) {
  return input.split(',');
}

export function isEven(input) {
  const numberLength = input.toString().split('').length;

  if (numberLength % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getInvalidId(input) {
  const range = input.split("-");
  let invalidIds = [];

  for (let i = Number(range[0]); i <= Number(range[1]); i++) {
    if (isInvalidId(i)) {
      invalidIds.push(i);
    }
  }

  return invalidIds;
}

function getInvalidIdPart2(input) {
  const range = input.split("-");
  let invalidIds = [];

  for (let i = Number(range[0]); i <= Number(range[1]); i++) {
    if (isInvalidIdPart2(i)) {
      invalidIds.push(i);
    }
  }

  return invalidIds;
}

export function countInvalidId(input) {
  return getInvalidId(input).length;
}

export function isInvalidId(input) {
  if (isEven(input)) {
    const length = input.toString().length;
    const half = length / 2;
    const firstHalf = input.toString().substring(0, half);
    const secondHalf = input.toString().substring(half, length);
   
    if (firstHalf === secondHalf) {
      return input;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function splitIntoChunks(input, i) {
  let chunkSize = i;
  let subRanges = [];
  let array = Array.from(input.toString());
  for (let j = 0; j < array.length; j += chunkSize) {
    let chunk = array.slice(j, j + chunkSize);
    subRanges.push(chunk);
  }

  return subRanges;
}

export function isInvalidIdPart2(input) {
  const length = input.toString().length;
  let array = [];
  for (let i = 1; i < length; i++) {
    if (length % i === 0) {
      let chunks = splitIntoChunks(input, i);

      array.push(chunks);
    }
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    let unique = array[i].map(item => Number(item.join('')));
    result.push(new Set(unique).size);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      return input;
    }
  }

  return false;
}

console.log(syncReadFile('/Users/klaudiaklis/Rzeczy/AdventOfCode/2025/Day2/input.txt'));
