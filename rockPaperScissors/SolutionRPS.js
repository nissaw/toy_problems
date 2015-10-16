var rockPaperScissors = function (rounds) {
  var outcomes = [];
  var plays = ['rock', 'paper', 'scissors'];
  var count = rounds || 3;

  var playRounds = function(roundsToGo, playedSoFar) {
    if ( count === 0 ) {
      outcomes.push(playedSoFar);

    }
    else {
      var result = [];
      for ( var i = 0;  i < plays.length; i++ ) {
        currentPlay = plays[i];
        
      }
    }

  }

  playRounds(count, []);

  return outcomes;
}

[rock, rock , rock]