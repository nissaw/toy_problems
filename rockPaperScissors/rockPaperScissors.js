/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds) {
  var collections = [];
  var plays = ['rock', 'paper', 'scissors'];

  var playRound = function(round, playedSoFar) {
    if (round === rounds) {
      collections.push(playedSoFar);
      return;
    }
    
    for (var i = 0; i < plays; i++){
      currentPlay = plays[i];
      playRound( round+1, playedSoFar.concat(currentPlay) );

    }
  };

  playRound(1, []);
  return collections;
};





//  solution 

//     var rockPaperScissors = function(rounds) {
//   rounds = rounds || 3;
//   var outcomes = [];
//   var plays = ['rock', 'paper', 'scissors'];

// var combos = function(roundsToGo, playedSoFar) {
//   if (roundsToGo === 0 ) {
//     outcomes.push ( playedSoFar );
//     return;
//   }
//   for (var i = 0; i < plays.length; i++){
//     var currentPlay = plays[i];
//     combos( roundsToGo - 1, playedSoFar.concat(currentPlay) );
//   }
// };

// combos ( rounds, []) ;
// return outcomes;

// };


    // [[rock]]






    // at each round add to the current solution. 
    collections.push(solution);
  };
  return collections;
};
