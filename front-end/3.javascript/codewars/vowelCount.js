/*
Return the number (count) of vowels in the given string.
*/

function getCount(str) {
  let vowelsFound = str.match(/[aeiou]/gi);
  return vowelsFound === null ? 0 : vowelsFound.length;
}

// variations

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// quadratic time solution

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a","e","i","o","u"];
  for(let i = 0; i < str.length; i++) {
    for(let j = 0 ; j < vowels.length ; j++) {
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}


function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}

function getCount(str) {
  var vowelsCount = 0;
  for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }
  }
  return vowelsCount;
}