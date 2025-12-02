// Day 1
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  let arr = contents.split(/\r?\n/);

  let position = 50;
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i].substring(0,1);
    let number = Number(arr[i].substring(1,arr[i].length+1));

    if  (direction === 'R') {
        position += number;
    }

    if (direction === 'L') {
        position -= number;
    }

    console.log(position, i)

    for (let j = 0; j < arr.length; j++) {
        if (position >= 100) {
            let rest = position - 100;
            position = rest;
        }

        if (position < 0) {
            let rest = position + 100;
            position = rest;
        }
    }

    if (position === 0) {
        countZero++;
    }
  }
  
  console.log(position, countZero);
}

syncReadFile('/Users/klaudiaklis/Rzeczy/AdventOfCode/day_1_input.txt');