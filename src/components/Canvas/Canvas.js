import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";

const Canvas = ({ tool, color, lineWidth }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [context, setContext] = useState(null);
  const [texts, setTexts] = useState([]);
  const [currentText, setCurrentText] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [, setHighlightedText] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        setContext(ctx);
      }
    }
  }, [color, lineWidth]);

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    if (tool === "drawing" || tool === "eraser") {
      startMouseDown(
        e,
        tool === "drawing" ? () => setIsDrawing(true) : () => setIsErasing(true)
      );
    } else if (tool === "textbox") {
      const x = offsetX;
      const y = offsetY;
      setTextPosition({ x, y });
      setTextInput("");
      setCurrentText({ x, y });
    }
  };

  const startMouseDown = (e, setToolState) => {
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setToolState();
  };

  const draw = (e) => {
    if (!isDrawing || tool !== "drawing") return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const handleMouseUp = (e) => {
    if (tool === "drawing") {
      context.closePath();
      setIsDrawing(false);
    } else if (tool === "eraser") {
      setIsErasing(false);
    }
  };

  const erase = (e) => {
    if (isErasing) {
      const { offsetX, offsetY } = e.nativeEvent;
      context.clearRect(
        offsetX - lineWidth / 2,
        offsetY - lineWidth / 2,
        lineWidth * 3,
        lineWidth * 3
      );
      highlightTextboxes(offsetX, offsetY);
    }
  };

  const highlightTextboxes = (x, y) => {
    const highlightedIndex = texts.findIndex((text) => {
      return (
        x >= text.x && x <= text.x + 100 && y >= text.y && y <= text.y + 20
      );
    });

    if (highlightedIndex !== -1) {
      setHighlightedText(highlightedIndex);
    } else {
      setHighlightedText(null);
    }
  };

  useEffect(() => {
    if (currentText) {
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          if (textInput.trim()) {
            setTexts([...texts, { ...currentText, text: textInput }]);
          }
          setCurrentText(null);
          setTextInput("");
        } else if (e.key === "Backspace") {
          setTextInput(textInput.slice(0, -1));
        } else if (e.key.length === 1) {
          setTextInput((prev) => prev + e.key);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentText, textInput, texts]);

  const handleTextClick = (index) => {
    if (tool === "eraser") {
      const confirmDelete = window.confirm("Confirm textbox deletion?");
      if (confirmDelete) {
        setTexts(texts.filter((_, i) => i !== index));
        setHighlightedText(null);
      }
    }
  };

  return (
    <div className="canvas-container" style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        className="Canvas"
        width={795}
        height={450}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={tool === "eraser" ? erase : draw}
      />
      {currentText && (
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onBlur={() => {
            if (textInput.trim()) {
              setTexts([...texts, { ...currentText, text: textInput }]);
            }
            setCurrentText(null);
            setTextInput("");
          }}
          style={{
            position: "absolute",
            cursor: "pointer",
            top: textPosition.y,
            left: textPosition.x,
            backgroundColor: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "4px",
            zIndex: 1,
            width: "100px",
            height: "20px",
          }}
        />
      )}
      {texts.map((text, index) => (
        <div
          key={index}
          onClick={() => handleTextClick(index)}
          style={{
            position: "absolute",
            cursor: "pointer",
            top: text.y,
            left: text.x,
            backgroundColor: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "4px",
            zIndex: 0,
            pointerEvents: tool === "eraser" ? "auto" : "none",
          }}
        >
          {text.text}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
