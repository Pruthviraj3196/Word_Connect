
import React, { useState } from "react";
import WordGrid from "./components/WordGrid";
import ConfigPanel from "./components/ConfigPanel";
import GameStats from "./components/GameStats";
import './App.css';

const App = () => {
  const [groupSize, setGroupSize] = useState(2);
  const [itemCount, setItemCount] = useState(8);
  const [columns, setColumns] = useState(4);
  const [attempts, setAttempts] = useState(0);
  const [words, setWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const resetGame = () => {
    setAttempts(0);
    setMatchedPairs([]);
    generateWords();
  };

  const generateWords = () => {
    const wordGroups = Array.from({ length: itemCount / groupSize }, (_, i) =>
      Array(groupSize).fill(`Word ${i + 1}`)
    ).flat();
    const shuffledWords = [...wordGroups].sort(() => Math.random() - 0.5);
    setWords(shuffledWords);
  };

  React.useEffect(() => {
    generateWords();
  }, [groupSize, itemCount]);

  return (
    <>
    <div className="heading">
      <h1>Connect group of 2 words by clicking on related words</h1>
    </div>
    <div className="app-container">
      <ConfigPanel
        groupSize={groupSize}
        setGroupSize={setGroupSize}
        itemCount={itemCount}
        setItemCount={setItemCount}
        columns={columns}
        setColumns={setColumns}
        resetGame={resetGame}
      />
       
      <GameStats attempts={attempts} resetGame={resetGame} />
      <WordGrid
        words={words}
        columns={columns}
        matchedPairs={matchedPairs}
        setMatchedPairs={setMatchedPairs}
        setAttempts={setAttempts}
        groupSize={groupSize}
      />
    </div>
    </>
  );
};

export default App;
