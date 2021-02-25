let board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    //create an array to track all the box values
    board[clickedId]=playerSpan.innerHTML;
    //set all variables that can be a "win" condition
    let row1=board[0] + board[1] + board[2];
    let row2=board[3] + board[4] + board[5];
    let row3=board[6] + board[7] + board[8];
    let column1=board[0] + board[3] + board[6];
    let column2=board[1] + board[4] + board[7];
    let column3=board[2] + board[5] + board[8];
    let diag1=board[0] + board[4] + board[8];
    let diag2=board[2] + board[4] + board[6];
    //variable to track whether or not a winner has been found
    let winner=false;
    // variable to track whether or not the game board is full
    let isComplete = false;
    
    // this if else statement changes the "player ()'s turn" as well as adding the X or O into the tic tac toe board
    if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      clickedElement.innerText = 'X';
    } else {
      playerSpan.innerText = 'X';
      clickedElement.innerText = 'O';
    }

    //this code checks to see if any rows are winning rows
    if (row1==="XXX" || row1==="OOO") {
        winner=true;    
    } 
    
    if (row2==="XXX" || row2==="OOO") {
        winner=true;    
    } 
    
    if (row3==="XXX" || row3==="OOO") {
        winner=true;    
    }

    //this code checks to see if any columns are winning columns
    if (column1==="XXX" || column1==="OOO") {
        winner=true;    
    } 
    
    if (column2==="XXX" || column2==="OOO") {
        winner=true;    
    } 
    
    if (column3==="XXX" || column3==="OOO") {
        winner=true;    
    }

    //this code checks to see if any diagonals are winning diagonals
    if (diag1==="XXX" || diag1==="OOO") {
        winner=true;    
    } 
    
    if (diag2==="XXX" || diag2==="OOO") {
        winner=true;    
    } 

    

    //board checker variable is created and set to include the concatenated string values of all the board array items.
    let boardChecker = "";
    for (let i=0; i<board.length; i++) {
        boardChecker+=typeof board[i];
    }

    //this code checks to see if the board is full or not. this is done by verifying that the boards array length is 9, AND the array has no undefined values in it as checked in teh board checker string.
    if (board.length===9 && !boardChecker.includes("undefined")) {
        isComplete = true;
    }

    //check our tracker variables and alert in the window
    if (winner) {
        if (playerSpan.innerText === 'X') {
            setTimeout(function() {
                window.alert("O is the winner!");
              },0);
          } else {
            setTimeout(function() {
                window.alert("X is the winner!");
              },0);
          }
    }

    if (isComplete && !winner) {
        setTimeout(function() {
            window.alert("This is a CATs game!");
          },0);
    }   

    // console.log(...board);
    // console.log("winner: " + winner);
    // console.log("iscomplete: " + isComplete);
    // console.log("the board: ", board);
    // console.log("board[0]: " + board[0]);
    // console.log(board[0]===undefined);
    // console.log("boardlength: " + board.length);
    // console.log("array of filtered undefineds: ", board.map(val => val===undefined).length);
    // console.log("is there undefined in the board? "+ !board.map(val => val===undefined).length);
    // console.log("the undefined tracker array: ", board.map(val => val===undefined));
    // console.log("row1: " + row1);
    // console.log("row2: " +row2);
    // console.log("row3: " +row3);
    // console.log("col1: " +column1);
    // console.log("col2: " +column2);
    // console.log("col3: " +column3);
    // console.log("diag1: " +diag1);
    // console.log("diag2: " +diag2 + "\n\n");
  }