import React from "react";

function Box({ row, col, selectedTile, onClick }) {
  let className = "box";

  if (selectedTile) {
    // Check if the box is on the same diagonal as the selected tile
    if (col % 2 === row % 2) {
      className += " white";
    }
    if (col % 2 !== row % 2) {
      className += " black";
    }
    if (
      row - col === selectedTile.row - selectedTile.col ||
      row + col === selectedTile.row + selectedTile.col
    ) {
      className = " selected";
    }
    // Apply a special style for the clicked tile itself
    if (row === selectedTile.row && col === selectedTile.col) {
      className = " clicked";
    }
  }

  return (
    <button
      style={{ height: "40px", width: "40px" }}
      className={className}
      data-row={row}
      data-col={col}
      onClick={onClick}
    />
  );
}

export default Box;
