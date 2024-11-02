import React, { useState } from "react";
import Box from "./Box";
import "./App.css";

const gridSize = 8;

function App() {
  const [selectedTile, setSelectedTile] = useState(null);

  function colorDiagonally(e) {
    const target = e.target;
    // console.log(target.dataset);
    // console.log(target.dataset.col);

    setSelectedTile({
      row: Number(target.dataset.row),
      col: Number(target.dataset.col),
    });
  }

  function renderGrid() {
    const grid = [];
    for (let row = 0; row < gridSize; row++) {
      const columns = [];
      for (let col = 0; col < gridSize; col++) {
        columns.push(
          <Box
            key={`${row}-${col}`}
            row={row}
            col={col}
            selectedTile={selectedTile}
            onClick={colorDiagonally}
          />
        );
      }
      grid.push(<div key={row}>{columns}</div>);
    }
    return grid;
  }

  // return (
  //   <>
  //     <p
  //       style={{
  //         height: "30px",
  //         width: "400px",
  //         border: "1px solid",
  //         textAlign: "center",
  //       }}
  //     >
  //       Click on any cell to color diagonally
  //     </p>

  //     <div style={{ border: "1px solid" }}>
  //       {Array.from({ length: gridSize }, (_, row) => (
  //         <div key={row}>
  //           {Array.from({ length: gridSize }, (_, col) => (
  //             <Box
  //               key={col}
  //               row={row}
  //               col={col}
  //               selectedTile={selectedTile}
  //               onClick={colorDiagonally}
  //             />
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );

  return (
    <>
      <p>Click on any cell to color diagonally</p>
      <div>{renderGrid()}</div>
    </>
  );
}

export default App;
