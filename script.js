let doGame = confirm("Would you like to gamble on horses?")

if (doGame == true) {
  startGame()
} 

function getWinningHorse() {
  randNum = Math.floor(Math.random() * 6);
  if (randNum == 0) {
    horse = "Red";
  } else if (randNum == 1) {
    horse = "Blue";
  } else if (randNum == 2) {
    horse = "Green"
  } else if (randNum == 3) {
    horse = "Purple"
  } else if (randNum == 4) {
    horse = "Yellow"
  }
  return horse;
}

function startGame() {
  let playersMoney = 250;
  for (let roundCount = 1; roundCount < 6; roundCount++) {
    let playersHorse = prompt("Which horse would you like to bet on? Red, Blue, Green, Purple, or Yellow?");
    playersHorse = playersHorse.toLowerCase();

    let playersBets = prompt(`How many bets would you like to place on the ${playersHorse} horse? CURRENT BALANCE: $${playersMoney}`);
    playersMoney = playersMoney - (playersBets * 10);
    console.log("You have placed $" + playersBets * 10 + " on the " + playersHorse + " horse.");
    console.log(getWinningHorse())

    // if (playersHorse == getWinningHorse())
  }
}