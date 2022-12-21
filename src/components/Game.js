import React from "react";
import Board from "./Board";
import "./Game.css";

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
    <div class="container">
      <div id="direction-screen">
        <h1>Select: </h1>
        <h2>This square</h2>
      </div>
      <Board squareIDArray={squareIDArray} handleClick={handleClick} />
      <div id="instructions">
        <h1>Instructions</h1>
        <p>
          Welcome to the chess board visualizer! Ever wonder how GMs can
          instantly recognize the position of square? Well now you can too!
        </p>
        <p>
          To play, click on the instructed square (found on the left) as fast as
          you can! Practice makes perfect!
        </p>
      </div>
    </div>
  );
}

export default Game;
