export const getBoardFromStorage = () => {
  const boardFromStorage = localStorage.getItem("board");
  if (boardFromStorage) {
    return JSON.parse(boardFromStorage);
  } else {
    return Array(9).fill(null);
  }
};

export const getTurnFromStorage = (icons) => {
  const turnFromStorage = localStorage.getItem("turn");
  if (turnFromStorage) {
    return turnFromStorage;
  } else {
    return icons.X;
  }
};

export const saveGameToStorage = (board, player) => {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("turn", player);
};

export const deleteStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
};
