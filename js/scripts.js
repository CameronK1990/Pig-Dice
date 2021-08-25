//Business Logic
let P1currentPoints = 0;


function Player(total,current) {
  this.total = total;
  this.current = current;
}

Player.prototype.roll = function(result) {
  this.current += result;
  P1currentPoints = this.current;
  console.log(P1currentPoints);
}

function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1))
  ;
}




//submit button to call rollDice
//if number is not 1, add total to currentPoints
//if dice rolls 1, switch to P2 with message
//submit button to end turn and #switch to P2
//display number rolled
//display current total somewhere
//display P1 total somewhere
//display P2 total somewhere

//UI logic
let pOneScore = new Player (0,0);
let results = 0

$(document).ready(function() {
$("form#roll-dice").submit(function(event) {
  event.preventDefault();
  results = rollDice(1,6);
  pOneScore.roll(results);
  console.log(pOneScore.current);
  });
});
