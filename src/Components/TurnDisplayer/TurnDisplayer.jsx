import "./turnDisplayer.css";

function TurnDisplayer({ icons, turn }) {
  return (
    <div className="turn-container">
      {turn === icons.X ? (
        <>
          <div className="selected">{icons.X}</div>
          <div>{icons.O}</div>
        </>
      ) : (
        <>
          <div>{icons.X}</div>
          <div className="selected">{icons.O}</div>
        </>
      )}
    </div>
  );
}

export default TurnDisplayer;
