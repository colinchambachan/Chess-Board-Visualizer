import "./App.css";
import { Helmet } from "react-helmet";
import Board from "./components/Board.js";

function App() {
  return (
    <>
      <Helmet>
        <style>{"body{background-color: #312e2b;}"}</style>
      </Helmet>
      <div>
        <Board></Board>
      </div>
    </>
  );
}

export default App;
