# horse-racing-betting
Simple horse racing betting game

playersMoney = 250

playersChoice = Which horse do you want to bet on? Red, Blue, Yellow, Green, or Purple?
If playersChoice != Red, Blue, Yellow, Green, or Purple, ask again.

Need to check if the players choice is one of the horses. If not, ask again. If so, force it to have correct capitalization formatting.

How many bets would you like to place on the ${playersChoice} horse? CURRENT BALANCE: ${playersMoney}
Need to check if the money goes below zero and give an error if so.

Multiply the bets by 10 and subtract that from playersMoney.

Need to generate 5 random numbers and have them assigned to each horse.
Need to subtract the players bets from 100 and randomly distribute the rest between the horses.





The game will play 10 times, each end will add +1 to roundCounter, and then give the results and end it by making doGame false.

BETTING
There are 100 bets total. Each is worth $10. The player can place as many bets as they want, and the rest of the bets will be randomly distributed between the horses.

How does this betting system work? There are 100 bets total, worth $10 each, $1000 total. Say its spread between the 5 horses equally. That means 20 bets are worth $1000 total, or $50 a piece. Need to make a formula to get this. 

BET DISTRIBUTION: totalBets - playersBets, divide that by 5, then add playersBets to the playersHorse bets count. 
CALCULATE WINNINGS: ($1000/winning horse bets). That gets the value of the winning horses bets. Get the number of playersBets placed on that horse and multiply it by the value. 