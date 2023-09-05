# Techology used
The CSS file styles the game board, cells, buttons, and the winner display. It provides the visual layout and styling for the game.
JavaScript (script.js): This file contains the game logic and functionality.
The JavaScript code defines variables to track the game state, including the current player, the game board, and whether the game is active or not.

It sets up an array of win patterns to check for winning conditions.

The checkWin function checks if a player has won or if it's a draw based on the win patterns and updates the message accordingly.

The handleCellClick function handles user clicks on the cells, updating the game board and checking for a win after each move. If Player vs. AI mode is active, it triggers the AI's move.

The aiMove function implements the AI's move using the Minimax algorithm with Alpha-Beta pruning.

The code includes an event listener for cell clicks, restart button clicks, and buttons for choosing the game mode (Player vs. Player or Player vs. AI).

The resetGame function resets the game state when the Restart button is clicked.

Overall, this code creates a fully functional Tic-Tac-Toe game where users can play against each other or against an AI opponent. The game board is displayed using HTML and styled with CSS, while JavaScript provides the game's logic and interactivity.


# Tic-Tac-Game Using Min Max Algorithm and Alpha Beta Pruning 
The Tic-Tac-Toe game provided here showcases a sophisticated AI opponent powered by the Minimax algorithm with Alpha-Beta pruning. Let's break down how this intelligent opponent operates:

Minimax Algorithm:
The Minimax algorithm is a strategic decision-making tool employed in two-player games. It explores all feasible game states, determining the best move for a player at any given point.

Alpha-Beta Pruning:
Alpha-Beta pruning optimizes the Minimax algorithm by intelligently eliminating branches of the game tree that cannot lead to improved outcomes. This efficiency boost significantly speeds up the algorithm's decision-making process.

Evaluation Function:
In this implementation, there's a simplified evaluation approach. It directly assesses game states based on whether they lead to a win, loss, or draw:

If the AI can win in the next move, it assigns a score of 1.
If the opponent can win in the next move, it assigns a score of -1.
If neither player can secure a victory immediately, it assigns a score of 0, indicating a likely draw.
Minimax Recursive Function:
The minimax function recursively explores the game tree. It:

Begins with a specific board state, the current player, and initial alpha and beta values.
Checks for terminal conditions: AI win, opponent win, or a draw, assigning scores accordingly.
If the game isn't over, it generates possible moves, evaluates them via Minimax, and assigns scores.
Alpha and beta values keep track of the best-known values.
The function returns an object with the best score for the current player and the index of the best move.
AI Move Selection:
The AI player ('O') employs the Minimax algorithm to make its move:

It calls the minimax function with the current board state, 'O' as the current player, and initial alpha and beta values.
The AI selects the move with the highest score, aiming for the most advantageous outcome.
Game Loop:
The game unfolds in a loop as players alternate clicking on cells. After each move, the checkWin function assesses the game's status, looking for a win or draw. If it's the AI's turn (exclusive to player vs. AI mode), the AI leverages the Minimax algorithm to make its move.

Reset Function:
The resetGame function enables players to start afresh by resetting the board and game state.

Event Listeners:
Event listeners are applied to game cells, the restart button, and mode selection buttons, ensuring smooth handling of user interactions.

In summary, this Minimax algorithm with Alpha-Beta pruning represents a robust approach to creating an intelligent AI opponent in games like Tic-Tac-Toe. It guarantees optimal decision-making, making the AI a formidable and engaging adversary for players. 




![Home](https://github.com/pankit01999/Tic-Tac-Game/assets/143706134/e9c3bf12-4cac-4287-8159-25ff0c07246d)
