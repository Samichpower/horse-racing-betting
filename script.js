let doGame = confirm("Would you like to gamble on horses? Bets are $10 each.")

if (doGame == true) {
  startGame()
} 

function getWinningHorse() {
  let horse;
  randNum = Math.floor(Math.random() * 5);
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

function capFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


function startGame() {
  let playersMoney = 250;
  for (let roundCount = 1; roundCount < 11; roundCount++) {
    console.log("--ROUND " + roundCount + "--");
    console.log("CURRENT MONEY: $" + playersMoney);

    //GET PLAYERS HORSE OF CHOICE
    let playersHorse = prompt("Which horse would you like to bet on? Red, Blue, Green, Purple, or Yellow?");
    playersHorse = capFirstLetter(playersHorse);

    //GET PLAYERS BETS
    let playersBets = prompt(`How many bets would you like to place on the ${playersHorse} horse? CURRENT BALANCE: $${playersMoney}`);
    playersBets = Number(playersBets);
    playersMoney = playersMoney - (playersBets * 10);
    
    let winningHorse = getWinningHorse();
    console.log("You placed $" + playersBets * 10 + " on the " + playersHorse + " horse.");

    //BET DISTRIBUTION
    let totalBets = 100 - playersBets;
    
    let redBets = totalBets / 5;
    let blueBets = totalBets / 5;
    let greenBets = totalBets / 5;
    let purpleBets = totalBets / 5;
    let yellowBets = totalBets / 5;
    
    //ADDS PLAYERSBETS TO HORSEBETS
    if (playersHorse == "Red") {
      redBets = redBets + playersBets;
    } else if (playersHorse == "Blue") {
      blueBets = blueBets + playersBets;
    } else if (playersHorse == "Green") {
      greenBets = greenBets + playersBets;
    } else if (playersHorse == "Purple") {
      purpleBets = purpleBets + playersBets;
    } else if (playersHorse == "Yellow") {
      yellowBets = yellowBets + playersBets;
    }

    function getPlayersWinnings(colorBets) {
      return Math.ceil((1000 / colorBets) * playersBets);
    }

    let playerWinnings = 0;

    //CALCULATES PLAYERS WINNINGS AND ADDS TO THEIR TOTAL
    if (winningHorse == "Red" && playersHorse == "Red") {
      playerWinnings = getPlayersWinnings(redBets);
      playersMoney += getPlayersWinnings(redBets);
    } else if (winningHorse == "Blue" && playersHorse == "Blue") {
      playerWinnings = getPlayersWinnings(blueBets);
      playersMoney += getPlayersWinnings(blueBets);
    } else if (winningHorse == "Green" && playersHorse == "Green") {
      playerWinnings = getPlayersWinnings(greenBets);
      playersMoney += getPlayersWinnings(greenBets);
    } else if (winningHorse == "Purple" && playersHorse == "Purple") {
      playerWinnings = getPlayersWinnings(purpleBets);
      playersMoney += getPlayersWinnings(purpleBets);
    } else if (winningHorse == "Yellow" && playersHorse == "Yellow") {
      playerWinnings = getPlayersWinnings(yellowBets);
      playersMoney += getPlayersWinnings(yellowBets);
    }

    console.log(winningHorse + " wins! You won $" + playerWinnings);
    console.log("Betting Breakdown:");
    console.log("Red: " + redBets + ". Blue: " + blueBets + ". Green: " + greenBets + ". Purple: " + purpleBets + ". Yellow: " + yellowBets);
  }
}