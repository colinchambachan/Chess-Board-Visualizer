import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div class="title-container">
        <h1 id="Title">Chess Board Visualizer</h1>
      </div>

      {/* display game */}
      <Game />
    </>
  );
}

export default App;
