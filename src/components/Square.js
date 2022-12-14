import "./Square.css";
/**
 * Initializes Each square found on chessboard
 * @returns Single Square
 */
export default function Square(props) {
  let id = props.id;
  let handleClick = props.handleClick;
  // temporary onClick function notifies which square was clicked
  return <div className="Square" onClick={() => handleClick(id)}></div>;
}
