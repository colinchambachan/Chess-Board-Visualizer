import "./Square.css";
/**
 * Initializes Each square found on chessboard
 * @returns Single Square
 */
export default function Square({ squareID, handleClick, squareColor }) {
  // uses props to handle onlick, which was passed from Game.js
  return (
    <div
      id={squareID}
      className={squareColor}
      onClick={() => alert(squareID)}
    ></div>
  );
}
