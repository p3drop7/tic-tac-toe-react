import "./square.css";

function Square({ index, board, handlerBoard }) {
  const handlerClick = () => {
    handlerBoard(index);
  };

  return (
    <div className="square-container" onClick={handlerClick}>
      {board[index]}
    </div>
  );
}

export default Square;
