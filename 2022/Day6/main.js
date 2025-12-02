const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8')
    .replace(/\r/g, "")
    .trim();
  const arr = [contents][0].split('');
  
  function findMarker(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
       if ( arr[i] !== arr[i+1] && arr[i] !== arr[i+2] && arr[i] !== arr[i+3] && arr[i+1] !== arr[i+2] && arr[i+1] !== arr[i+3] && arr[i+2] !== arr[i+3] ) { break; }
       result.push(arr[i]);
    } 
    return result.length+4;
  }
  
  function part2(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
      const unique_signal = new Set([...arr.slice(i,i+14)]);
      
      if (unique_signal.size === 14) {
        result = i + 14;
        break;
      }
    }
    return result;
  }
  console.log(part2(arr));
}

syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day6/day6data.txt');