
function Player(total,current) {
  this.total = total;
  this.current = current;
}

Player.prototype.roll = function(result) {
  this.current += result;
}

function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1))
  ;
}

Player.prototype.hold = function(current) {
  this.total += current;
  this.current = 0;
}




//if number is not 1, add total to currentPoints
//if dice rolls 1, pop alert and hide current players button and
//shows the other players button
//display current total somewhere

//display P1 total somewhere
//display P2 total somewhere

//display number rolled

//UI logic
function playerOneDetails(any) {
  playerOneDetails = $("#roll-dice1").toggle();
}

function playerTwoDetails(any) {
  playerTwoDetails = $("#roll-dice2").toggle();
}

function showDetails() {
  pOneScore.hold(pOneScore.current);
  pOneScore.current = 0;
  playerTwoDetails("#roll-dice2");
}

function showDetails2() {
  pTwoScore.hold(pTwoScore.current);
  pTwoScore.current = 0;
  playerOneDetails("#roll-dice1");
}

let pOneScore = new Player (0,0);
let results = 0
let pTwoScore = new Player (0,0);

$(document).ready(function() {
  $("form#roll-dice1").submit(function(event) {
    event.preventDefault();
    results = rollDice(1,6);
    pOneScore.roll(results);
    console.log(pOneScore.current);
    $("#chalkboard1").text(pOneScore.current);
  });

  document.getElementById('hold-pone').onclick = function showDetails() {
    pOneScore.hold(pOneScore.current);
    playerTwoDetails("#roll-dice2");
  }

  $("form#roll-dice2").submit(function(event){
    event.preventDefault();
    results= rollDice(1,6);
    pTwoScore.roll(results);
    console.log(pTwoScore.current);
    $("#chalkboard2").text(pTwoScore.current);
  });
  document.getElementById('hold-ptwo').onclick = function showDetails2() {
    pTwoScore.hold(pTwoScore.current);
    playerOneDetails("#roll-dice1");
  };
});

