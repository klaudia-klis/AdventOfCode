const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  const arr = contents.split(/\r?\n/);
  
  function splitData(arr) {
    var splitted = [];
    for (let i = 0; i < arr.length; i++) {
      splitted.push(arr[i].split(','));
    }
    return splitted;
  }
  
  function splitMore(arr) {
    var splitted = splitData(arr);
    var result = [];
    for (let i = 0; i < splitted.length; i++) {
      result.push(splitted[i][0].split('-'), splitted[i][1].split('-'));
    }
    return result;
  }
  
  function sort(arr) {
    var result = splitMore(arr);
    var byTwo = [];
    for (let i = 0; i < result.length; i++) {
      if ( !Array.isArray(byTwo.at(-1)) ) {
        byTwo.push([result[i]]);
      } else if ( byTwo.at(-1).length !== 2) {
        byTwo[byTwo.length - 1].push(result[i]);
      } else {
        byTwo.push([result[i]]);
      }
    }
    return byTwo;
  }
  
  var object = {};
  for (let i = 0; i <= 99; i++) {
    object[i] = i;
  }
  
  function findPairs(arr) {
    var byTwo = sort(arr);
    var pairs = [];
    for (let i = 0; i < byTwo.length; i++) {
      if ( (object[byTwo[i][0][0]] <= object[byTwo[i][1][0]] && object[byTwo[i][0][1]] >= object[byTwo[i][1][1]]) || (object[byTwo[i][1][0]] <= object[byTwo[i][0][0]] && object[byTwo[i][1][1]] >= object[byTwo[i][0][1]]) ) {
        pairs.push(byTwo[i]);
      }
    }
    return pairs.length;
  }
  
  function findOverlap(arr) {
    var byTwo = sort(arr)
    var overlaps = [];
    for (let i = 0; i < byTwo.length; i++) {
      if ( (object[byTwo[i][0][0]] < object[byTwo[i][1][0]] && object[byTwo[i][0][1]] < object[byTwo[i][1][0]] ) || (object[byTwo[i][1][0]] < object[byTwo[i][0][0]] && object[byTwo[i][1][1]] < object[byTwo[i][0][0]]) ) {
        overlaps.push(byTwo[i]);
      }
    }
    return (byTwo.length - overlaps.length);
  }
  
  console.log(findOverlap(arr));
}  

syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day4/day4data.txt');