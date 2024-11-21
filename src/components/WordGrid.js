import React from "react";

const WordGrid = ({ words, columns, matchedPairs, setMatchedPairs, setAttempts, groupSize }) => {
  const [selectedWords, setSelectedWords] = React.useState([]);

  const handleWordClick = (index) => {
    if (matchedPairs.includes(index) || selectedWords.includes(index)) return;

    const newSelection = [...selectedWords, index];
    setSelectedWords(newSelection);

    if (newSelection.length === groupSize) {
      setAttempts((prev) => prev + 1);
      const selectedText = newSelection.map((i) => words[i]);
      const isMatch = selectedText.every((word) => word === selectedText[0]);

      if (isMatch) {
        setMatchedPairs((prev) => [...prev, ...newSelection]);
      }
      setTimeout(() => setSelectedWords([]), 1000);
    }
  };

  return (
    <div
      className="word-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {words.map((word, index) => (
        <div
          key={index}
          className={`word-card ${
            matchedPairs.includes(index)
              ? "matched"
              : selectedWords.includes(index)
              ? "selected"
              : ""
          }`}
          onClick={() => handleWordClick(index)}
        >
          {matchedPairs.includes(index) ? "" : word}
        </div>
      ))}
    </div>
  );
};

export default WordGrid;
