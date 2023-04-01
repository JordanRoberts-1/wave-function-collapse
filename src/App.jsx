import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TileConstraintVisualizer from "./Components/TileConstraintVisualizer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <TileConstraintVisualizer />
    </div>
  );
}

export default App;
