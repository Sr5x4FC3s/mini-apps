//define tic tac toe
//no frameworks or jquery (must use native DOM methods)
//board can be setup as two arrays (three for the columns and three for the rows)
//input - and event that the user puts in either an X or O
//output - when the is a winner or a tie, return a statement and clear the board
//we know that the game can only have nine turns

// var board = () => {
//   let board = [];
//   let theBoard = new Array(9);
//   //*** might try adding an array(9) that the game works on and display them
//   //with the corresponding rows
//   let row1 = new Array(3);
//   let row2 = new Array(3);
//   let row3 = new Array(3);
//   //we've now created the general board and three rows that are a maximum size
//   //of three
// };


var board = new Array(9);
var row1 = new Array(3);
var row2 = new Array(3);
var row3 = new Array(3);
//create a turn counter to count how many turns have gone by and if
//game will consist of one player and computer
//can use a random func that will generate a number for the index to place a row
//this random func will be called everytime there is a user input that alters
//the DOM in any way
//possibly can use remove and add attr and listen for an event to do that action

var TicTacToe = () => {

}; // this is where the game will be played out

//by default, the user will initially start off as X since it will always go
//first.

var addingX = () => {
  //we need to take an input from the user and determine the coordinates
  //we can input an value to the global array 'board' and translate that to a
  //row

};

var userWins = () => {
  return `Congrats bro(ette), you've won the game!`;
}

var issaTie = () => {
  return `It's a tie game, click new game to try again!`;
}

var cpuWins = () => {
  return `The computer has the game! Restart for redemption!`;
}
