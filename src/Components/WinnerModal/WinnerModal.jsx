import "./winnerModal.css"

function WinnerModal({winner, resetGame}) {
    console.log(winner)
    return (
        <div className="winnerModal-container">
            <div>
                {
                    winner === "Tie"
                        ? <h2>Tie!</h2>
                        : <h2>Player <span>{winner}</span> wins!</h2>
                }
                <button onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    )
}

export default WinnerModal