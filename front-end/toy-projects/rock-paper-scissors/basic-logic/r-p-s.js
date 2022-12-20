const rps = (p1, p2) => {
  let result = '';
  
  if (p1 == p2) {
    result = 'Draw!';
  } else if (p1 == 'rock') {
    if (p2 == 'paper') {
      result = 'Player 2 won!';
    } else {
      result = 'Player 1 won!';
    }
  } else if (p1 == 'scissors') {
    if (p2 == 'rock') {
      result = 'Player 2 won!';
    } else {
      result = 'Player 1 won!';
    }
  } else if (p1 == 'paper') {
    if (p2 == 'scissors') {
      result = 'Player 2 won!';
    } else {
      result = 'Player 1 won!';
    }
  }
  
  return result;
};

console.log(rps('rock', 'scissors'));