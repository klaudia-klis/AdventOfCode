// Day 2
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  const arr = contents.split(/\r?\n/);

function combination(num) {
    switch(num) {
      case 'A X': return 4;
      case 'A Y': return 8;
      case 'A Z': return 3;
      case 'B X': return 1;
      case 'B Y': return 5;
      case 'B Z': return 9;
      case 'C X': return 7;
      case 'C Y': return 2;
      case 'C Z': return 6;
    }
  }
  function countPoints(arr) {
    var points = [];
    for ( let i = 0; i < arr.length; i++ ){
      points.push(combination(arr.at(i)));
    }
    var sum = 0;
    for ( let j = 0; j < points.length; j++ ) {
      sum += points.at(j);
    }
    return sum;
  }

  var combinations = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
  };

  function partTwo(arr) {
    var points = [];
    for ( let i = 0; i < arr.length; i++ ){
      points.push(combinations[arr.at(i)]);
    }
    var sum = 0;
    for ( let j = 0; j < points.length; j++ ) {
      sum += points.at(j);
    }
    return sum;
  }
  console.log(partTwo(arr));
}
  
syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day2/day2data.txt');