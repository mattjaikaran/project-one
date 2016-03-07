// window.onload();
// console.log('JavaScript has loaded...');

var playX = "X";
var playO = "O";

// var = ["X", "O"];

//If first player chooses S5(middle square), I want the computer's move to be either Sq 1, Sq 3, Sq7, or Sq9
var play = function (){
  return Math.floor(Math.random()*4 + 1);
};

var playerMove = function() {
//second moves

  // if player chooses Sq 5, computer will randomly choose either Sq 1, Sq 3, Sq 7, or Sq 9. Probability shows if middle square is
  // chosen first, the second player's best move is a corner spot thus the best option to not lose which will be a tie.
  if (five.innerText == playX) {
    console.log('clicked on middle');
    if (play() === 1) {
      console.log(1);
      boardC("");
      one.innerText = playO;
      one.disabled = true;
      five.innerText.disabled = true;
      return playO;
    } else if (play() === 2) {
      console.log(2);
      boardC("");
      three.innerText = playO;
      three.disabled = true;
      five.innerText.disabled = true;
      return playO;
    } else if (play() === 3) {
      console.log(3);
      boardC("");
      seven.innerText = playO;
      seven.disabled = true;
      five.innerText.disabled = true;
      return playO;
    } else {
      console.log(4);
      boardC("");
      nine.innerText = playO;
      nine.disabled = true;
      five.innerText.disabled = true;
      return playO;
    }
  }

    //pick a corner, keep playing the corners
    // if Sq 1 is chosen first. Computers options will be 3, 5, 7, 9
  if (one.innerText == playX) {
    if (play() === 1) {
      boardC();
      console.log(1);
      five.innerText = playO;
      five.disabled = true;
      one.innerText.disabled = true;
      return (playO);
    } else if (play() === 2) {
      boardC();
      console.log(2);
      three.innerText = playO;
      three.disabled = true;
      one.innerText.disabled = true;
      return (playO);
    } else if (play() === 3) {
      boardC();
      console.log(3);
      seven.innerText = playO;
      seven.disabled = true;
      one.innerText.disabled = true;
      return (playO);
    } else {
      boardC();
      console.log("else");
      nine.innerText = playO;
      nine.disabled = true;
      one.innerText.disabled = true;
      return (playO);
    }
}
// if Sq 3 is chosen
  if (three.innerText == playX) {
    if (play() === 1) {
      boardC("");
      console.log(1);
      five.innerText = playO;
      five.disabled = true;
      three.innerText.disabled = true;
      return playO;
    } else if (play() === 2) {
      boardC("");
      console.log(2);
      one.innerText = playO;
      one.disabled = true;
      three.innerText.disabled = true;
      return playO;
    } else if (play() === 3) {
      boardC("");
      console.log(3);
      seven.innerText = playO;
      seven.disabled = true;
      three.innerText.disabled = true;
      return playO;
    } else {
      boardC("");
      console.log("else");
      nine.innerText = playO;
      nine.disabled = true;
      three.innerText.disabled = true;
      return playO;
    }
  }
  // if Sq 7 is chosen
  if (seven.innerText == playX) {
    if (play() === 1) {
      boardC("");
      console.log(1);
      five.innerText = playO;
      five.disabled = true;
      seven.innerText.disabled = true;
      return playO;
    } else if (play() === 2) {
      boardC("");
      console.log(2);
      one.innerText = playO;
      one.disabled = true;
      seven.innerText.disabled = true;
      return playO;
    } else if (play() === 3) {
      boardC("");
      console.log(3);
      three.innerText = playO;
      three.disabled = true;
      seven.innerText.disabled = true;
      return playO;
    } else {
      boardC("");
      console.log("else");
      nine.innerText = playO;
      nine.disabled = true;
      seven.innerText.disabled = true;
      return playO;
    }
  }
  // if Sq 9 is chosen
  if (nine.innerText == playX) {
    if (play() === 1) {
      console.log(1);
      boardC("");
      one.innerText = playO;
      one.disabled = true;
      nine.innerText.disabled = true;
      return playO;
    } else if (play() === 2) {
      console.log(2);
      boardC("");
      three.innerText = playO;
      three.disabled = true;
      nine.innerText.disabled = true;
      return playO;
    } else if (play() === 3) {
      console.log(3);
      boardC("");
      seven.innerText = playO;
      seven.disabled = true;
      nine.innerText.disabled = true;
      return playO;
    } else {
      console.log("else");
      boardC("");
      one.innerText = playO;
      one.disabled = true;
      nine.innerText.disabled = true;
      return playO;
    }
  }


//EVEN numbers ie squares 2,4,6,8

//if Sq 2 is chosen
  if (two.innerText == playX) {
    if (play() === 1) {
      console.log(1);
      boardC("");
      one.innerText = playO;
      one.disabled = true;
      two.innerText.disabled = true;
      return playO;
    } else if (play() === 2) {
      console.log(2);
      boardC("");
      three.innerText = playO;
      three.disabled = true;
      two.innerText.disabled = true;
      return playO;
    } else if (play() === 3) {
      console.log(3);
      boardC("");
      seven.innerText = playO;
      seven.disabled = true;
      two.innerText.disabled = true;
      return playO;
    } else {
      console.log("else");
      boardC("");
      one.innerText = playO;
      one.disabled = true;
      two.innerText.disabled = true;
      return playO;
    }
  }


  // if Sq 4 is chosen
  if (four.innerText == playX) {
    if (play() === 1) {
      boardC("");
      console.log(1);
      five.innerText = playO;
      five.disabled = true;
      four.innerText.disabled = true;
      return playO;
    } else if (play() === 2) {
      boardC("");
      console.log(2);
      one.innerText = playO;
      one.disabled = true;
      four.innerText.disabled = true;
      return playO;
    } else if (play() === 3) {
      boardC("");
      console.log(3);
      three.innerText = playO;
      three.disabled = true;
      four.innerText.disabled = true;
      return playO;
    } else {
      boardC("");
      console.log("else");
      nine.innerText = playO;
      nine.disabled = true;
      four.innerText.disabled = true;
      return playO;
    }
  }

// if Sq 6 is chosen
if (six.innerText == playX) {
  if (play() === 1) {
    boardC("");
    console.log(1);
    five.innerText = playO;
    five.disabled = true;
    six.innerText.disabled = true;
    return playO;
  } else if (play() === 2) {
    boardC("");
    console.log(2);
    one.innerText = playO;
    one.disabled = true;
    six.innerText.disabled = true;
    return playO;
  } else if (play() === 3) {
    boardC("");
    console.log(3);
    three.innerText = playO;
    three.disabled = true;
    six.innerText.disabled = true;
    return playO;
  } else {
    boardC("");
    console.log("else");
    nine.innerText = playO;
    nine.disabled = true;
    six.innerText.disabled = true;
    return playO;
  }
}

// if Sq 8 is chosen
if (eight.innerText == playX) {
  if (play() === 1) {
    boardC("");
    console.log(1);
    five.innerText = playO;
    five.disabled = true;
    eight.innerText.disabled = true;
    return playO;
  } else if (play() === 2) {
    boardC("");
    console.log(2);
    one.innerText = playO;
    one.disabled = true;
    eight.innerText.disabled = true;
    return playO;
  } else if (play() === 3) {
    boardC("");
    console.log(3);
    three.innerText = playO;
    three.disabled = true;
    eight.innerText.disabled = true;
    return playO;
  } else {
    boardC("");
    console.log("else");
    nine.innerText = playO;
    nine.disabled = true;
    eight.innerText.disabled = true;
    return playO;
  }
}

// if a square is already chosen it cannot be marked again by computer or player
  if (boardC("") === true) {
    innerText.disable = true;
  }




  // "third" moves
  if ((two.innerText == playX && three.innerText == playX) ||
  (four.innerText == playX && seven.innerText == playX) ||
  (five.innerText == playX && nine.innerText == playX)) {
    one.innerText = playO;
    one.disabled = true;
  } if ((one.innerText == playX && three.innerText == playX) ||
    (five.innerText == playX && eight.innerText == playX)) {
      two.innerText = playO;
      two.disabled = true;
  } if ((six.innerText == playX && nine.innerText == playX) ||
    one.innerText == playX && two.innerText == playX ||
    five.innerText == playX && seven.innerText == playX) {
      three.innerText = playO;
      three.disabled = true;
  } if ((one.innerText == playX && seven.innerText == playX) ||
    five.innerText == playX && six.innerText == playX) {
      four.innerText = playO;
      four.disabled = true;
  } if ((one.innerText == playX && nine.innerText == playX) ||
    (four.innerText == playX && six.innerText == playX) ||
    (three.innerText == playX && seven.innerText == playX)) {
      five.innerText = playO;
      five.disabled = true;
  } if ((four.innerText == playX && five.innerText == playX) ||
    three.innerText == playX && nine.innerText == playX) {
      six.innerText = playO;
      six.disabled = true;
  } if ((one.innerText == playX && four.innerText == playX) ||
    (three.innerText == playX && five.innerText == playX) ||
    eight.innerText == playX && nine.innerText == playX) {
      seven.innerText = playO;
      seven.disabled = true;
  } if ((two.innerText == playX && five.innerText == playX) ||
    seven.innerText == playX && nine.innerText == playX) {
      eight.innerText = playO;
      eight.disabled = true;
  } if ((one.innerText == playX && five.innerText == playX) ||
    (three.innerText == playX && six.innerText == playX) ||
    (seven.innerText == playX && eight.innerText == playX)) {
      nine.innerText = playO;
      nine.disabled = true;
  }

}; //end of function

var playerTurn = 0;

// var array = [];


var oneC;
var twoC;
var threeC;
var fourC;
var fiveC;
var sixC;
var sevenC;
var eightC;
var nineC;

boardC = function () {
  oneC = one.innerText;
  twoC = two.innerText;
  threeC = three.innerText;
  fourC = four.innerText;
  fiveC = five.innerText;
  sixC = six.innerText;
  sevenC = seven.innerText;
  eightC = eight.innerText;
  nineC = nine.innerText;
};

if (boardC === true) {
  console.log();
}


// var gameHasStarted = false;
// var status = document.querySelector('.status');

var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');

one.addEventListener('click', function(){
  // console.log('Hello!');
  one.innerText=playX;
  boardC();
  playerMove();
  one.disabled = true;
});

two.addEventListener('click', function(){
  // console.log('Hello!');
  two.innerText=playX;
  boardC();
  playerMove();
  two.disabled = true;
});

three.addEventListener('click', function(){
  // console.log('Hello!');
  three.innerText=playX;
  boardC();
  playerMove();
  three.disabled = true;
});

four.addEventListener('click', function(){
  // console.log('Hello!');
  four.innerText=playX;
  boardC();
  playerMove();
  four.disabled = true;
});

five.addEventListener('click', function(){
  // console.log('Hello!');
  five.innerText=playX;
  boardC();
  playerMove();
  five.disabled = true;
});

six.addEventListener('click', function(){
  // console.log('Hello!');
  six.innerText=playX;
  boardC();
  playerMove();
  six.disabled = true;
});

seven.addEventListener('click', function(){
  // console.log('Hello!');
  seven.innerText=playX;
  boardC();
  playerMove();
  seven.disabled = true;
});

eight.addEventListener('click', function(){
  // console.log('Hello!');
  eight.innerText=playX;
  boardC();
  playerMove();
  eight.disabled = true;
});

nine.addEventListener('click', function(){
  // console.log('Hello!');
  nine.innerText=playX;
  boardC();
  playerMove();
  nine.disabled = true;
});



var playerWin = function() {
  if (oneC && twoC && threeC === playX) {
    prompt("You win!");
  }
};










// var start = document.getElementsByClassName('startButton');
// startButton.addEventListener('click', function(eventObject){
//   eventObject.
// })

// }

// var start = document.querySelector('.startButton');
// start.addEventListener('click', function () {
//   // prevents clicking play lots of times
//   if (!gameHasStarted) {
//     cards.forEach(function (card, i) {
//       card.element.classList.remove('chosen');
//     });

// var button = document.querySelector('.play');
// button.addEventListener('click', function () {
//   // prevents clicking play lots of times
//   if (!gameHasStarted) {
//     cards.forEach(function (card, i) {
//       card.element.classList.remove('chosen');
//     });
//
// var gameArray = [
//   { value: = null;
//     value: function() {
//       if ()
//     };
//
//   }
//   return playerMove;
// ];
//
//
// addEventListener
//
//
//
//
// var checkRow(row, val) {
//   var result = true;
//   for (var i = 0; i < gameArray.length; i++) {
//     if (gameArray[i].row == row) {
//       (gameArray[i].value != value);
//       return false;
//     }
//   }
//   console.log(checkRow);
// };
