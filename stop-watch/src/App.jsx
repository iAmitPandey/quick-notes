import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    } else if (!isRunning && timer) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, startTime]);

  const start = () => {
    if (!isRunning) {
      setStartTime(Date.now() - elapsedTime);
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    if (!isRunning && elapsedTime > 0) {
      setElapsedTime(0);
    }
  };

  const formatTime = (time) => {
    const hours = String(Math.floor(time / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(
      2,
      "0"
    );
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="container">
      <div id="stop-watch">{formatTime(elapsedTime)}</div>
      <div className="buttons-container">
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset} disabled={isRunning || elapsedTime === 0}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
