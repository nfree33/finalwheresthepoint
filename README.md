# finalwheresthepoint


Technologies Used

'Where's the Point' relies heavily on Javascript to create a user vs. CPU experience. The actors are built through classes. The direction of CPU/user choices are shown through changeDisplayValue functions. jQuery was used to grab elements on the HTML built through CSS.


Approach Taken

CPU moves are determined through Math.floor(Math.random()), and user moves are determined through the keyboard event listeners. 


Link to Site

https://nfree33.github.io/finalwheresthepoint/

Unsolved Problems

Each successive 'click' of the offense and defense buttons resulted in multiple lives being lost (if point matches look). Round 5 resulted in 5 lives being lost, which broke the game. Originally, each side had 3 lives and the first to lose all lives lost the game

The work around - Each side begins with one life. If you lose the life, the opponent wins the round. First one to win three rounds wins the game.

**The bug still exists, but the checkWin function was edited to reset each side's lives to 1 after each round. This fixed the bug because even if round 15 resulted in a loss, you would have -14 lives, but all that mattered to secure a round win is that you/your opponent had '<= 0'. Then lives are reset to 1 and the new round starts fresh.


Future Updates

Lives being updated on each side of the game window. 

Spinning question mark is more dynamic. Starts in the middle of the baord and then moves to cover opponent choice once 'start game' button has been hit.

Multiple enemies to battle through. An array was originally set up but had to be trashed for simplicities sake.

Add sound on wins and round outcomes.