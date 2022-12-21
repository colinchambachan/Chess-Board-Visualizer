import Square from "./Square.js";
import "./Board.css";

export default function Board({ squareIDArray, handleClick }) {
  // Use of spread to ensure squareIDList updates with changes in squareIDArray
  const squareIDList = [...squareIDArray];

  const isDark = (id) => {
    let idIndex = squareIDArray.indexOf(id);
    let output = "";
    if (
      idIndex < 8 ||
      (idIndex > 15 && idIndex < 24) ||
      (idIndex > 31 && idIndex < 40) ||
      (idIndex > 47 && idIndex < 56)
    ) {
      output =
        squareIDList.indexOf(id) % 2 === 0 ? "light-square" : "dark-square";
    } else {
      output =
        squareIDList.indexOf(id) % 2 === 0 ? "dark-square" : "light-square";
    }
    console.log(output);
    return output;
  };

  // Map each square id to its own square component
  const boardSquares = squareIDList.map((squareID) => (
    <Square
      squareID={squareID}
      onClick={handleClick}
      squareColor={isDark(squareID)}
    />
  ));

  return <div id="chess-board">{boardSquares}</div>;
}
