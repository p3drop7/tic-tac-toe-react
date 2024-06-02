const WINNER_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board) => {
  for (const pattern of WINNER_PATTERNS) {
    const [a, b, c] = pattern;

    // Check a, b and c positions to see if there is a winner
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      //If there is a winner:
      return board[a];
    }
  }

  // if no winner:
  return null;
};

export const checkTie = (board) => {
  // Check every square to see if there are elements
  // If so, there is a tie
  return board.every((square) => square !== null);
};
