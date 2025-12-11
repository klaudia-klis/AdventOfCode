// Day 1
import { readFileSync } from 'fs';

export function f1(input) {
  let arr = toRotations(input);

  let position = 50;
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    let startingPosition = position;
    let direction = arr[i].substring(0,1);
    let number = Number(arr[i].substring(1,arr[i].length+1));

    if  (direction === 'R') {
        position += number;
    }

    if (direction === 'L') {
        position -= number;
    }

     while (position >= 100) {
       let rest = position - 100;
       position = rest;
     }

     while (position < 0) {
       let rest = position + 100;
       position = rest;
     }
	  
     if (position === 0) {
        countZero++;
     }

  }
  
  return countZero;
}

export function f2(input) {
  let rotations = toRotations(input);
  let position = 50;
  let countZeroes = 0;
  for (let i = 0; i < rotations.length; i++) {
    let data = rotate(position, rotations[i]);

    position = data.position;
    countZeroes += data.zeroes;
  }

  return countZeroes;
}

export function toRotations(input) {
  return input.split("\n");
}

export function rotate(position, rotation) {
  let direction = rotation.substring(0,1);
  let steps = Number(rotation.substring(1, rotation.length + 1));
  let newPos = position;
  let zeroes = 0;

  while (steps > 0) {
    if (direction === 'L') {
      newPos--;
      if (newPos === 0) {
        zeroes++;
      }
      if (newPos === -1) {
        newPos = 99;
      }
    } else {
      newPos++;
      if (newPos === 100) {
        newPos = 0;
      }
      if (newPos === 0) {
        zeroes++;
      }
    }
    steps--;
  }

  return {
    position: newPos,
    zeroes: zeroes
  };
}

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  return f2(contents);
}

console.log(syncReadFile('/Users/klaudiaklis/Rzeczy/AdventOfCode/2025/Day1/day_1_input.txt'));
