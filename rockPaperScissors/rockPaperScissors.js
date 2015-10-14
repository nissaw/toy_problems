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

  var 
    
      
      if ( this.children.length === 0 ) { // has no current children add directly to its array
        for (var i = 0; i < plays.length; i++ ) {
          this.children.push(makeTree(plays[i]));
        }
      } else { // already has children iterate through and add args to all of its children
        for (var j = 0; j < this.children.length; j++ ) { // for each child
            for (var k = 0; k < plays.length; k++ )
          this.children[j].children.push(makeTree(plays[k]));  // and add them as chidren 
          } 
        }
    };


    for ( var i = 1 ; i < rounds; i++ ) {
      rockTree.addRound();

      })
    }   

    rockTree.addRound();
    rockTree.addRound();

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
//   for (vari = 0; i < plays.length; i++){
//     var currentPlay = plays[i];
//     combos( roundsToGo - 1, playedSoFar.concat(currentPlay) );
//   }
// };

// combos ( rounds, []) ;
// return outcomes;

// };


    






    // at each round add to the current solution. 
    collections.push(solution);
  };
  return collections;
};
