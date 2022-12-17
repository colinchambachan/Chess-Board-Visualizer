import "./Square.css";
/**
 * Initializes Each square found on chessboard
 * @returns Single Square
 */
export default function Square({ squareID, handleClick }) {
  // uses props to handle onlick, which was passed from Game.js
  return (
    <div className="Square" onClick={() => alert(squareID)}>
      hello!!
    </div>
  );
}
