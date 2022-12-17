import React from "react";
import Board from "./Board";

function Game() {
  // Create array for each individual square id
  const idWidths = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const idHeights = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const squareIDArray = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 7; j >= 0; j--) {
      squareIDArray.push(idWidths[i] + idHeights[j]);
    }
  }

  // Todo: Create handleClick function that runs game logic
  const handleClick = (id) => {
    // handle game logic
    alert(id);
  };

  return (
    <>
      {/* // Todo: Delete tag, was used to test if array had values */}

      {/* Current bug, board displays but not squares  */}
      <Board squareIDArray={squareIDArray} handleClick={handleClick} />
    </>
  );
}

export default Game;
