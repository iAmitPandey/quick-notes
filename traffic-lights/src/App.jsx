import React, { useState, useEffect } from "react";
import "./App.css";

function TrafficLight() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;
    if (light === "red") {
      timer = setTimeout(() => setLight("green"), 5000); // 5 seconds for red
    } else if (light === "green") {
      timer = setTimeout(() => setLight("yellow"), 3000); // 3 seconds for green
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("red"), 2000); // 2 seconds for yellow
    }
    return () => clearTimeout(timer); // Clear timeout when component unmounts or light changes
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === "red" ? "active" : ""}`}></div>
      <div className={`light green ${light === "green" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${light === "yellow" ? "active" : ""}`}
      ></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}

export default App;
