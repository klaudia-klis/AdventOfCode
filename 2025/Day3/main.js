import { readFileSync } from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  return f2(contents);
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

export function findLargestJoltagePart2(input) {
    let length = input.length;
    let num = 11;

    const array = input.split('').map(a => Number(a));
    let slicedArray = array.slice(0, length - 11);
    let largestNumber = Math.max(...slicedArray);
    let index = array.indexOf(largestNumber);
    let result = [];
    num--;

    result.push(largestNumber);
    while (num >= 0) {
        slicedArray = array.slice(index + 1, length - num);
        largestNumber = Math.max(...slicedArray);
        index = index + 1 + slicedArray.indexOf(largestNumber);

        num--;
        result.push(largestNumber);
    }
    
    return Number(result.join(''));
}

export function f2(input) {
    const banks = toBanks(input);
    let result = [];
    
    for (let i = 0; i < banks.length; i++) {
        result.push(findLargestJoltagePart2(banks[i]));
    }

    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    
    return sum;
}

console.log(syncReadFile('/Users/klaudiaklis/Rzeczy/AdventOfCode/2025/Day3/input.txt'));