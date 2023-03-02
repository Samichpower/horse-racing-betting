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


RACING
There are 5 horses total.