const GameStats = ({ attempts, resetGame }) => {
    return (
      <div className="game-stats">
        <p>Attempts: {attempts}</p>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    );
  };
  
  export default GameStats;
  