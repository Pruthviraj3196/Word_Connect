const ConfigPanel = ({
    groupSize,
    setGroupSize,
    itemCount,
    setItemCount,
    columns,
    setColumns,
    resetGame,
  }) => {
    return (
      <div className="config-panel">
        <h3>Game Settings</h3>
        <label>
          Group Size:
          <select value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))}>
            {[2, 3, 4].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
        <label>
          Item Count:
          <select value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))}>
            {[8, 12, 16].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </label>
        <label>
          Columns:
          <select value={columns} onChange={(e) => setColumns(Number(e.target.value))}>
            {[4, 5, 6].map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </label>
        <button onClick={resetGame}>Apply & Reset</button>
      </div>
    );
  };
  
  export default ConfigPanel;
  