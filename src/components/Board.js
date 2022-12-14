import Square from "./Square.js";
import "./Board.css";

export default function Board(props) {
  const squareIDList = props.squareIDArray;
  const handleClick = props.handleClick;
  // Map each square id to its own square component

  const boardSquares =
    squareIDList &&
    squareIDList.map((squareID) => (
      <Square props={{ squareID, handleClick }} />
    ));

  return <div id="chess-board">{boardSquares}</div>;
}
