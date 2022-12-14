const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  const arr = contents.split(/\r?\n/);
  
  function splitArray(arr) {
    var splitted = [];
    for (let i = 0; i < arr.length; i++) {
      splitted.push(arr[i].split(' '));
    }
    return splitted;
  }
  
  var splitted = splitArray(arr);
  var move = {};
  var from_ = {};
  var to = {};
  for (let i = 0; i < splitted.length; i++) {
    move[splitted[i][1]] = parseInt(splitted[i][1]);
    from_[splitted[i][3]] = parseInt(splitted[i][3] - 1);
    to[splitted[i][5]] = parseInt(splitted[i][5] - 1);
  }
  
  function moveLetters(arr) {
    let splitted = splitArray(arr);
    let configuration = [['M', 'S', 'J', 'L', 'V', 'F', 'N', 'R'], ['H', 'W', 'J', 'F', 'Z', 'D', 'N', 'P'], ['G', 'D', 'C', 'R', 'W'], ['S', 'B', 'N'], ['N', 'F', 'B', 'C', 'P', 'W', 'Z', 'M'], ['W', 'M', 'R', 'P'], ['W', 'S', 'L', 'G', 'N', 'T', 'R'], ['V', 'B', 'N', 'F', 'H', 'T', 'Q'], ['F', 'N', 'Z', 'H', 'M', 'L']];
   // let result;
    let res = "";
    let result = [];
    for (let i = 0; i < splitted.length; i++) {
      for (let j = 0; j < move[splitted[i][1]]; j++) {
        result = configuration[from_[splitted[i][3]]].shift()
        configuration[to[splitted[i][5]]].unshift(result);  
      }
    }
    for (k = 0; k < configuration.length; k++) {
      res += configuration[k].shift();
    }
    return res;
  }
  console.log(moveLetters(arr));
}

syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day5/day5data.txt');