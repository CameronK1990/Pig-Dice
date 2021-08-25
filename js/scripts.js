
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
}




//if number is not 1, add total to currentPoints
//if dice rolls 1, pop alert and hide current players button and
//shows the other players button
//display current total somewhere

//display P1 total somewhere
//display P2 total somewhere

//display number rolled

//UI logic


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
  $("form#hold-pone").submit(function(event) {
    event.preventDefault();
    pOneScore.hold(current);
    console.log(pOneScore.total);
    // $("form#roll-dice1").hide();
    // $("form#roll-dice2").show();
  });

  $("form#roll-dice2").submit(function(event){
    event.preventDefault();
    results= rollDice(1,6);
    pTwoScore.roll(results);
    console.log(pTwoScore.current);
    $("#chalkboard2").text(pTwoScore.current);
  });
});

