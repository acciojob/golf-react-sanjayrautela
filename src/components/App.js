import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [ballPosition, setBallPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setBallPosition(prevPosition => prevPosition + 5);
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  return (
    <div className="App">
      <button className="start" onClick={buttonClickHandler} style={{ display: renderBall ? 'none' : 'block' }}>
        Start
      </button>
      {renderBall && (
        <div className="ball" style={{ left: `${ballPosition}px` }}></div>
      )}
    </div>
  );
};

export default App;
