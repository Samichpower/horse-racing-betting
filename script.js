let doGame = confirm("Would you like to gamble on horses?")

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




function startGame() {
  let playersMoney = 250;
  for (let roundCount = 1; roundCount < 6; roundCount++) {
    let playersHorse = prompt("Which horse would you like to bet on? Red, Blue, Green, Purple, or Yellow?");
    playersHorse = playersHorse.toLowerCase();

    let playersBets = prompt(`How many bets would you like to place on the ${playersHorse} horse? CURRENT BALANCE: $${playersMoney}`);
    playersBets = Number(playersBets);
    
    playersMoney = playersMoney - (playersBets * 10);
    console.log("You have placed $" + playersBets * 10 + " on the " + playersHorse + " horse.");
    console.log(getWinningHorse() + " wins!");

    //BET DISTRIBUTION
    let totalBets = 100 - playersBets;
    
    let redBets = totalBets / 5;
    let blueBets = totalBets / 5;
    let greenBets = totalBets / 5;
    let purpleBets = totalBets / 5;
    let yellowBets = totalBets / 5;

    console.log(typeof playersBets);
    
    //ADDS PLAYERSBETS TO HORSEBETS
    if (playersHorse == "red") {
      redBets = redBets + playersBets;
    } else if (playersHorse == "blue") {
      blueBets = blueBets + playersBets;
    } else if (playersHorse == "green") {
      greenBets = greenBets + playersBets;
    } else if (playersHorse == "purple") {
      purpleBets = purpleBets + playersBets;
    } else if (playersHorse == "yellow") {
      yellowBets = yellowBets + playersBets;
    }

    // console.log(typeof Number(playersBets))
    console.log(redBets, blueBets, greenBets, purpleBets, yellowBets);
  }
}