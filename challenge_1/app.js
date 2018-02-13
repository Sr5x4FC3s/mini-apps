//define tic tac toe
//no frameworks or jquery (must use native DOM methods)
//board can be setup as two arrays (three for the columns and three for the rows)
//input - and event that the user puts in either an X or O
//output - when the is a winner or a tie, return a statement and clear the board
//we know that the game can only have nine turns

//game reset
var reset = () => {
  for (var i = 0; i < 9; i++) {
    document.getElementById(i.toString()).innerHTML = '';
  }
  turns = 1;
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

// win, tie, lose functions
var xWins = () => {
  alert(`Congrats X-bro(ette), you've won the game!`);
}

var issaTie = () => {
  alert(`It's a tie game, try again!`);
}

var oWins = () => {
  alert(`Congrats O-bro(ette), you've won the game!`);
}

//check the rows for a winner
var rowCheck = (array) => {
  if (array[0] === 'X' && array[1] === 'X' && array[2] === 'X') {
    xWins();
    reset();
  }
  else if (array[3] === 'X' && array[4] === 'X' && array[5] === 'X') {
    xWins();
    reset();
  }
  else if (array[6] === 'X' && array[7] === 'X' && array[8] === 'X') {
    xWins();
    reset();
  }

  if (array[0] === 'O' && array[1] === 'O' && array[2] === 'O') {
    oWins();
    reset();
  }
  else if (array[3] === 'O' && array[4] === 'O' && array[5] === 'O') {
    oWins();
    reset();
  }
  else if (array[6] === 'O' && array[7] === 'O' && array[8] === 'O') {
    oWins();
    reset();
  }
}

var reset = () => {
  for (var i = 0; i < 9; i++) {
    document.getElementById(i.toString()).innerHTML = '';
  }
  turns = 1;
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

//check the columns for a winner
var columnCheck = (array) => {
  if (array[0] === 'X' && array[3] === 'X' && array[6] === 'X') {
    xWins();
    reset();
  }
  else if (array[1] === 'X' && array[4] === 'X' && array[7] === 'X') {
    xWins();
    reset();
  }
  else if (array[2] === 'X' && array[5] === 'X' && array[8] === 'X') {
    xWins();
    reset();
  }

  if (array[0] === 'O' && array[3] === 'O' && array[6] === 'O') {
    oWins();
    reset();
  }
  else if (array[1] === 'O' && array[4] === 'O' && array[7] === 'O') {
    oWins();
    reset();
  }
  else if (array[2] === 'O' && array[5] === 'O' && array[8] === 'O') {
    oWins();
    reset();
  }
}

//check diagonals for a winner
var diagonalCheck = (array) => {
  if (array[0] === 'X' && array[4] === 'X' && array[8] === 'X') {
    xWins();
    reset();
  }
  else if (array[2] === 'X' && array[4] === 'X' && array[6] === 'X') {
    xWins();
    reset();
  }
  if (array[0] === 'O' && array[4] === 'O' && array[8] === 'O') {
    oWins();
    reset();
  }
  else if (array[2] === 'O' && array[4] === 'O' && array[6] === 'O') {
    oWins();
    reset();
  }
}

var board = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // all starts with clean board

var turns = 1;

var TicTacToe = (click) => { // click will be "this" in html
  let id = click.id;
  if (turns % 2 === 1) {
    addingX(id);
  } else {
    addingO(id);
  }
  //check for wins
  if (turns >= 10) {
    issaTie();
    reset();
  } else {
    rowCheck(board);
    columnCheck(board);
    diagonalCheck(board);
  }
};

//invoke to add X
var addingX = (id) => {
  document.getElementById(id).innerHTML = 'X';
  board.splice(parseInt(id), 1, 'X');
  turns ++; // increment the turn for every move
  document.getElementById('turn-count').innerHTML = `It's Turn: ${turns - 1}`;
};

//invoke to add O
var addingO = (id) => {
  document.getElementById(id).innerHTML = 'O';
  board.splice(parseInt(id), 1, 'O');
  turns ++; // increment the turn for every move
    document.getElementById('turn-count').innerHTML = `Turn: ${turns - 1}`;
}
