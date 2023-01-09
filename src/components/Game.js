import React from "react";
import Board from "./Board";
import "./Game.css";
import { useState } from "react";

function Game() {
  // Create array for each individual square id
  const idWidths = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const idHeights = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const squareIDArray = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 7; j >= 0; j--) {
      // Concatenate width and height to create ID
      squareIDArray.push(idWidths[i] + idHeights[j]);
    }
  }

  // Game logic
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [targetSquare, setTargetSquare] = useState(
    squareIDArray[Math.floor(Math.random() * 63)]
  );
  const [output, setOutput] = useState("Click a square!");

  // function which increases score if correct square is clicked
  const handleClick = (id) => {
    if (id === targetSquare) {
      setScore(score + 1);
      setTargetSquare(squareIDArray[Math.floor(Math.random() * 63)]);
      setOutput("Correct!");
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setOutput("Incorrect :(");
    }
  };

  return (
    <div class="container">
      <div id="direction-screen">
        <h1>Select: {targetSquare}</h1>
        <h2>Score: {score} </h2>
        <h3>High score: {highScore}</h3>
        <button onClick={() => setHighScore(0)}>Reset High Score</button>
        <h2 id="output">{output}</h2>
      </div>
      <Board squareIDArray={squareIDArray} handleClick={handleClick} />
      <div id="instructions">
        <h1 id="Title">Instructions</h1>
        <p id="Body">
          Welcome to the chess board visualizer! Ever wonder how GMs can
          instantly recognize the position of square? Practice of course! Soon
          you'll be able to too!
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
