Tic Taco Toe - Pseudo code

Start Game:
-Click - "Let's Play!"
  ~ Game starts ~
  All 9 squares are empty.

-Player chooses X and clicks on desired square. Play X on square
-Computer chooses its move

-Process repeats until all 9 squares or winner gets 3 in a row diagonally, a row, or a column.

-If all 9 squares are full without a winner, it's a tie.
-If a player/computer gets their 'X' or 'O' 3 in a row by:
  ROW-(SQ1,SQ2,SQ3), (SQ4,SQ5,SQ6), (SQ7,SQ8,SQ9),
  COLUMNS-(SQ1,SQ4,SQ7), (SQ2,SQ5,SQ8), (SQ3,SQ6,SQ9),
  DIAGONALLY-(SQ1,SQ5,SQ9), (SQ3,SQ5,SQ7)

  Winner is determined.
