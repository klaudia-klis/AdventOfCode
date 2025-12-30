import { readFileSync } from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  return f1(contents);
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

console.log(syncReadFile('/Users/klaudiaklis/Rzeczy/AdventOfCode/2025/Day2/input.txt'));
