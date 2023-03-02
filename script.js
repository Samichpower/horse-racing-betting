let doGame = confirm("Would you like to gamble on horses?")

function startGame() {
  let playersMoney = 250;
  let roundCounter = 0;
  while (doGame == true) {
    let playersHorse = prompt("Which horse would you like to bet on? Red, Blue, Green, Purple, or Yellow?");
    playersHorse = playersHorse.toUpperCase();

    let playersBets = prompt(`How many bets would you like to place on the ${playersHorse} horse? CURRENT BALANCE: $${playersMoney}`);
    playersMoney = playersMoney - (playersBets * 10);
    console.log("You have placed $" + playersBets * 10 + " on the " + playersHorse + " horse.");
  }
}

if (doGame == true) {
  startGame()
} 


