const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');
const playerVsPlayerBtn = document.getElementById('player-vs-player');
const playerVsAIBtn = document.getElementById('player-vs-ai');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let playerVsAI = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWin = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            message.textContent = `Player ${board[a]} wins!`; // Display 'X wins' or 'O wins'
            cells[a].classList.add('winner');
            cells[b].classList.add('winner');
            cells[c].classList.add('winner');
        }
    }
    if (!board.includes('') && gameActive) {
        gameActive = false;
        message.textContent = "It's a draw!";
    }
};

const handleCellClick = (cell, index) => {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWin();
        if (gameActive && playerVsAI && currentPlayer === 'O') {
            aiMove();
        }
    }
};

const aiMove = () => {
    const bestMove = minimax(board, 'O', -Infinity, Infinity);
    const aiMoveIndex = bestMove.index;

    setTimeout(() => {
        handleCellClick(cells[aiMoveIndex], aiMoveIndex);
    }, 500);
};

const minimax = (board, player, alpha, beta) => {
    const availableCells = board.reduce((acc, currentValue, index) => {
        if (currentValue === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    if (checkWinForPlayer(board, 'O')) {
        return { score: 1 };
    } else if (checkWinForPlayer(board, 'X')) {
        return { score: -1 };
    } else if (availableCells.length === 0) {
        return { score: 0 };
    }

    const moves = [];
    for (let i = 0; i < availableCells.length; i++) {
        const move = {};
        move.index = availableCells[i];
        board[availableCells[i]] = player;

        if (player === 'O') {
            const result = minimax(board, 'X', alpha, beta);
            move.score = result.score;
        } else {
            const result = minimax(board, 'O', alpha, beta);
            move.score = result.score;
        }

        board[availableCells[i]] = '';
        moves.push(move);

        if (player === 'O') {
            alpha = Math.max(alpha, move.score);
        } else {
            beta = Math.min(beta, move.score);
        }

        if (beta <= alpha) {
            break;
        }
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
};

const checkWinForPlayer = (board, player) => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    message.textContent = '';
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('X', 'O', 'winner');
    });
    currentPlayer = 'X';
};

playerVsPlayerBtn.addEventListener('click', () => {
    playerVsAI = false;
    resetGame();
});

playerVsAIBtn.addEventListener('click', () => {
    playerVsAI = true;
    resetGame();
});

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

restartBtn.addEventListener('click', () => resetGame());
