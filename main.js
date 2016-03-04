// window.onload();
// console.log('JavaScript has loaded...');

var playX = "X";
var playO = "O";

// var = ["X", "O"];

var playerMove = function() {
  if (one.innerText == playX && two.innerText == playX) {
    three.innerText = playO;
  }
};

var playerTurn = 0;

var array = [];


var oneC;
var twoC;
var threeC;
var fourC;
var fiveC;
var sixC;
var sevenC;
var eightC;
var nineC;

var boardC = function() {
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
});

two.addEventListener('click', function(){
  // console.log('Hello!');
  two.innerText=playX;
  boardC();
  playerMove();
});

three.addEventListener('click', function(){
  // console.log('Hello!');
  three.innerText=playX;
  boardC();
  playerMove();
});

four.addEventListener('click', function(){
  // console.log('Hello!');
  four.innerText=playX;
  boardC();
  playerMove();
});

five.addEventListener('click', function(){
  // console.log('Hello!');
  five.innerText=playX;
  boardC();
  playerMove();
});

six.addEventListener('click', function(){
  // console.log('Hello!');
  six.innerText=playX;
  boardC();
  playerMove();
});

seven.addEventListener('click', function(){
  // console.log('Hello!');
  seven.innerText=playX;
  boardC();
  playerMove();
});

eight.addEventListener('click', function(){
  // console.log('Hello!');
  eight.innerText=playX;
  boardC();
  playerMove();
});

nine.addEventListener('click', function(){
  // console.log('Hello!');
  nine.innerText=playX;
  boardC();
  playerMove();
});






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
