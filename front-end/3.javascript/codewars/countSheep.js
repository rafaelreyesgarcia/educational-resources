const sheeps = [
  true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true
];

function countSheeps(sheepArr) {
  let sheepCount = 0;

  for (let i = 0; i < sheepArr.length; i++) {
    if(sheepArr[i] === true) {
      sheepCount++;
    }
  }

  return sheepCount;
}

function countSheeps2(sheepArr) {
  return sheepArr.filter(sheep => sheep === true).length;
}

function countSheeps3(sheepArr) {
  return sheepArr.filter(Boolean).length;
}

function countSheeps4(sheepArr) {
  return sheepArr.filter(sheep => sheep).length;
}

console.log(countSheeps(sheeps));
console.log(countSheeps2(sheeps));
console.log(countSheeps4(sheeps));