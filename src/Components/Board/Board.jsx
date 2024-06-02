import { useState } from "react";
import "./board.css";

import Square from "../Square/Square.jsx";
import TurnDisplayer from "../TurnDisplayer/TurnDisplayer.jsx";
import WinnerModal from "../WinnerModal/WinnerModal.jsx";

import { PLAYER_ICONS } from "../../logic/playerIcons";
import { checkTie, checkWinner } from "../../logic/board";
import {
  deleteStorage,
  getBoardFromStorage,
  getTurnFromStorage,
  saveGameToStorage,
} from "../../logic/storage.js";

function Board() {
  const icons = PLAYER_ICONS;

  // Get board and player from localStorage if available
  const [board, setBoard] = useState(getBoardFromStorage());
  const [player, setPlayer] = useState(getTurnFromStorage(icons));
  const [winner, setWinner] = useState(null);

  const handlerBoard = (index) => {
    // Check if the square has already been selected
    if (board[index] || winner) return;

    // Update board
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    // Update player
    const nextPlayer = player === icons.X ? icons.O : icons.X;
    setPlayer(nextPlayer);

    // Save game to the localStorage
    saveGameToStorage(newBoard, nextPlayer);

    // Check if there is a winner or a tie
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      deleteStorage();
    } else if (checkTie(newBoard)) {
      setWinner("Tie");
      deleteStorage();
    }
  };

  const resetGame = () => {
    deleteStorage();
    setBoard(Array(9).fill(null));
    setPlayer(icons.X);
    setWinner(null);
  };

  return (
    <div className="board-container">
      <h2>Tic-Tac-Toe</h2>

      <TurnDisplayer icons={icons} turn={player} />

      <div className="board">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              board={board}
              handlerBoard={handlerBoard}
            />
          );
        })}
      </div>

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>

      {winner ? <WinnerModal winner={winner} resetGame={resetGame} /> : null}
    </div>
  );
}

export default Board;
