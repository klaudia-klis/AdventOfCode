const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = [contents][0].split('');
  
  function findMarker(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
       if ( arr[i] !== arr[i+1] && arr[i] !== arr[i+2] && arr[i] !== arr[i+3] && arr[i+1] !== arr[i+2] && arr[i+1] !== arr[i+3] && arr[i+2] !== arr[i+3] ) { break; }
       result.push(arr[i]);
    } 
    return result.length+4;
  }
  
  console.log(findMarker(arr));
}

syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day6/day6data.txt');