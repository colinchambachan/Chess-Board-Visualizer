import "./Square.css";
/**
 * Initializes Each square found on chessboard
 * @returns Single Square
 */
export default function Square({ id }) {
  // temporary onClick function notifies which square was clicked
  return <div className="Square" onClick={() => alert(id)}></div>;
}
