import React, { useState } from "react";
import Canvas from "./components/Canvas/Canvas";
import Toolbar from "./components/Toolbar/Toolbar";
import "./App.css";

function App() {
  const [tool, setTool] = useState("drawing");
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(3);

  return (
    <div className="App">
      <header className="App-header">
        <img src="classkick.png" alt="Logo" className="App-logo" />
      </header>
      <div className="App-container">
        <Toolbar
          setTool={setTool}
          setColor={setColor}
          setLineWidth={setLineWidth}
          lineWidth={lineWidth}
          tool={tool}
        />
        <Canvas tool={tool} color={color} lineWidth={lineWidth} />
      </div>
    </div>
  );
}

export default App;
