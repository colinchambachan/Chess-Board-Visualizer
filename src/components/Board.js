import Square from "./Square.js";
import "./Board.css";

export default function Board() {
  const idWidths = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const idHeights = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const squareIDList = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 7; j >= 0; j--) {
      squareIDList.push(idWidths[i] + idHeights[j]);
    }
  }

  const boardSquares = squareIDList.map((squareID) => <Square id={squareID} />);

  return <div id="chess-board">{boardSquares}</div>;
}
