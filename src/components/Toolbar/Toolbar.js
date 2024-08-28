import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Toolbar = ({ setTool, setColor, setLineWidth, tool, lineWidth }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <button
        onClick={() => setTool("drawing")}
        style={{
          backgroundColor: tool === "drawing" ? "black" : "whitesmoke",
          color: tool === "drawing" ? "white" : "black",
          border: "2px solid black",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <i class="fas fa-pencil"></i> Drawer
      </button>
      <button
        onClick={() => setTool("textbox")}
        style={{
          backgroundColor: tool === "textbox" ? "black" : "whitesmoke",
          color: tool === "textbox" ? "white" : "black",
          border: "2px solid black",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <i class="fa fa-pencil-square"></i> TextBox
      </button>
      <button
        onClick={() => setTool("eraser")}
        style={{
          backgroundColor: tool === "eraser" ? "black" : "whitesmoke",
          color: tool === "eraser" ? "white" : "black",
          border: "2px solid black",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <i class="fa fa-eraser"></i> Eraser
      </button>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        title="Line Color"
        style={{
          backgroundColor: "whitesmoke",
          border: "2px solid black",
          borderRadius: "5px",
          cursor: "pointer",
          height: "auto"
        }}
      />
      <input
        type="range"
        min="1"
        max="10"
        value={lineWidth}
        onChange={(e) => setLineWidth(e.target.value)}
        title="Line Width"
      />
    </div>
  );
};

export default Toolbar;
