// Day 1
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  const arr = contents.split(/\r?\n/);
  var arr2 = [];
  for ( let i = 0; i < arr.length; i++ ) {
    arr2.push(parseInt(arr.at(i)));
  }
  function groupCalories(arr) {
    var arr3 = [];
    for ( let j = 0; j < arr2.length; j++ ) {
      if ( !Array.isArray(arr3.at(-1))) {
        arr3.push([arr2[j]]);
      } else if ( Number.isInteger(arr2[j]) ) {
        arr3[arr3.length - 1].push(arr2[j]);
      } else {
        arr3.push([arr2[j]]);
      }
    }
    var result = [];
    for ( let k = 1; k < arr3.length; k++) {
      arr3[k].shift();
    }
    for ( let l = 0; l < arr3.length; l++ ) {
      let sum = arr3[l].reduce(function(a, b) { return a + b;
      })
      result.push(sum);
    }
    let topThree = [result.sort().at(-1), result.sort().at(-2), result.sort().at(-3)];
    let sum2 = topThree.reduce(function(a, b) { return a + b; 
    })
    return sum2;
  } 
  console.log(groupCalories(arr2));
}

syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/day1data.txt');

