const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  const arr = contents.split(/\r?\n/);
  
  function removeRepetition(arr) {
    var result = []
    var x = [...new Set(arr.split(','))].join("");
    result.push(x);
    return result;
  }
  
  function sort(arr) {
    var byThree = []
    for ( let i = 0; i < arr.length; i++) {
      if ( !Array.isArray(byThree.at(-1)) ) {
        byThree.push([[...new Set(arr[i].split(''))].join('')]);
      } else if ( byThree.at(-1).length !== 3) {
        byThree[byThree.length - 1].push([...new Set(arr[i].split(''))].join(''));
      } else {
        byThree.push([[...new Set(arr[i].split(''))].join('')]);
      }
    }
    return byThree;
  }
  
  function generateAlphabet(capital = true) {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
  }
  
  var alphabet = generateAlphabet(false).concat(generateAlphabet(true));
  var object = {};
  for ( let i = 0; i < alphabet.length; i++ ) {
    object[alphabet[i]] = i+1;
  }
  
  function findRepetition(arr) {
    var byThree = sort(arr);
    var result = [];
    for (let i = 0; i < byThree.length; i++) {
      for (let j = 0; j < byThree[i][0].length; j++) {
        for (let k = 0; k < byThree[i][1].length; k++) {
          for (let l = 0; l < byThree[i][2].length; l++) {
            if (byThree[i][0].charAt(j) === byThree[i][1].charAt(k) && byThree[i][0].charAt(j) === byThree[i][2].charAt(l) ) {
              result.push(object[byThree[i][0].charAt(j)]);
              var sum = 0;
              for (let m = 0; m < result.length; m++) {
                sum += result[m];
              }
            }
          }
        }
      }
    }
    return sum;
  }
  
  console.log(findRepetition(arr));
}
syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day3/day3data.txt');