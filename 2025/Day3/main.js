import { readFileSync } from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  return f1(contents);
}

export function f1(input) {
    const banks = toBanks(input);
    let result = [];
    
    for (let i = 0; i < banks.length; i++) {
        result.push(findLargestJoltage(banks[i]));
    }

    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    
    return sum;
}

export function toBanks(input) {
  return input.split("\n");
}

export function findLargestJoltage(input) {
    const length = input.length;
    const array = input.split('').map(a => Number(a));
    let largestNumber = array[0];
    let index = 0;
    let secondLargest;
    for (let i = 1; i < length - 1; i++) {
        if (array[i] > array[i - 1] && largestNumber !== array[i] && array[i] > largestNumber) {
            largestNumber = array[i];
            index = i;
        }
    }

    secondLargest = array[index + 1];
    for (let i = index + 1; i < length; i++) {
         if (array[i] > secondLargest || array[i] === largestNumber) {
            secondLargest = array[i];
        }
    }

    return Number([largestNumber, secondLargest].join(''));
}

console.log(syncReadFile('/Users/klaudiaklis/Rzeczy/AdventOfCode/2025/Day3/input.txt'));