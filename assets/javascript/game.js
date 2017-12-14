    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 0;
    
    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // for (var i = 0, i <= 9) {
      //   guessesLeft;
      // }

      if (userGuess === computerGuess)  {
        wins ++;
      } 
      else if (userGuess !== computerGuess) {
        losses++;
      }

        var html =
          "<p><h3>Wins: " + wins + "</h3></p>" 
          + "<p><h3>Losses: " + losses + "</h3></p>" 
          // + "<p><h3>Guesses left: " + guessesLeft +
          + "<p><h3>Your guesses so far: " + userGuess

      document.querySelector("#rules").innerHTML = html;
      
    };