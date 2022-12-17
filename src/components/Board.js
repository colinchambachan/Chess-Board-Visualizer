import Square from "./Square.js";
import "./Board.css";

export default function Board({ squareIDArray, handleClick }) {
  const squareIDList = [...squareIDArray];
  // Map each square id to its own square component
  console.log(squareIDList);
  // Ternary operator ensures array contains values before proceeding
  const boardSquares = squareIDList?.map((squareID) => (
    <Square squareID={squareID} onClick={handleClick} />
  ));

  return <div id="chess-board">{boardSquares}</div>;
}
