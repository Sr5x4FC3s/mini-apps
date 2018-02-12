//define tic tac toe
//no frameworks or jquery (must use native DOM methods)
//board can be setup as two arrays (three for the columns and three for the rows)
//input - and event that the user puts in either an X or O
//output - when the is a winner or a tie, return a statement and clear the board
var TTT = () => {
  let board = [];
  let theBoard = new Array(9);
  //*** might try adding an array(9) that the game works on and display them
  //with the corresponding rows
  let row1 = new Array(3);
  let row2 = new Array(3);
  let row3 = new Array(3);
  //we've now created the general board and three rows that are a maximum size
  //of three

}

//game will consist of one player and computer
//can use a random func that will generate a number for the index to place a row
//this random func will be called everytime there is a user input that alters
//the DOM in any way
