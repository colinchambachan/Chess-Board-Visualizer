import "./App.css";
import { Helmet } from "react-helmet";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Helmet>
        <style>{"body{background-color: #312e2b;}"}</style>
      </Helmet>
      <div>hello</div>

      <div id="ChessboardDiv">
        <Game />
      </div>
    </>
  );
}

export default App;
