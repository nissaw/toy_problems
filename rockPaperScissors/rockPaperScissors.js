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


  var makeTree = function (play) {
    var tree =  {};
    tree.value = play;
    tree.children = [];
    _.extend(tree, treeMethods);
    return tree;
  };

    var treeMethods = {};
    treeMethods.addRound = function() {
      var plays = ['rock', 'paper', 'scissors'];
    
      
      if ( this.children === undefined ) { // has no current children add directly to its array
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

    var rockTree = makeTree('rock');
    var paperTree = makeTree('paper');
    var scissorsTree = makeTree('scissors');

    for ( var i = 1 ; i < rounds; i++ ) {
      rockTree.addRound();

      })
    }   
    rockTree.addRound();
    rockTree.addRound();


    






    // at each round add to the current solution. 
    collections.push(solution);
  };
  return collections;
};
