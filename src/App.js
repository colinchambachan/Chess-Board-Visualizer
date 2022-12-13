import "./App.css";
import { Helmet } from "react-helmet";
import Board from "./components/Board.js";

function App() {
  return (
    <>
      <Helmet>
        <style>{"body{background-color: #312e2b;}"}</style>
      </Helmet>
      <div>hello</div>
      <div id="ChessboardDiv">
        <Board />
      </div>
    </>
  );
}

export default App;
