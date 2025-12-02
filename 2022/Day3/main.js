// Day 3
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  
  const arr = contents.split(/\r?\n/);
  
  function generateAlphabet(capital = true) {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
  }
  
  function inHalf(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
      var half = Math.ceil(arr[i].length / 2);
      var firstHalf = arr[i].slice(0, half);
      var secondHalf = arr[i].slice(half);
      var x = [...new Set(firstHalf.split(''))].join("");
      var y = [...new Set(secondHalf.split(''))].join("");
      result.push([[x], [y]]);
    }
    return result;
  }
  
  function findInBoth(arr) {
    var result = inHalf(arr);
    var repetition = [];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i][0][0].length; j++) {
        for (let k = 0; k < result[i][1][0].length; k++) {
          if ( result[i][0][0].charAt(j) === result[i][1][0].charAt(k) ) {
            repetition.push(object[result[i][0][0].charAt(j)]);
            var sum = 0;
            for (let l = 0; l < repetition.length; l++) {
              sum += repetition[l];
            }
          }
        }
      }
    }
    return sum;
  }
  
  var alphabet = generateAlphabet(false).concat(generateAlphabet(true));
  var object = {};
  for ( let i = 0; i < alphabet.length; i++ ) {
    object[alphabet[i]] = i+1;
  }
  
  console.log(findInBoth(arr));
}

syncReadFile('/Users/klaudiaklis/Sites/AdventOfCode/Day3/day3data.txt');
