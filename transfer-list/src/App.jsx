import React, { useState } from "react";
import "./App.css";

const initialLeftData = [
  { id: "usa", name: "USA" },
  { id: "uae", name: "UAE" },
  { id: "ind", name: "India" },
  { id: "aus", name: "Australia" },
  { id: "can", name: "Canada" },
];

const App = () => {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(initialLeftData);
  const [right, setRight] = useState([]);

  const handleCheck = (id) => {
    setChecked((prevChecked) =>
      prevChecked.includes(id)
        ? prevChecked.filter((item) => item !== id)
        : [...prevChecked, id]
    );
  };

  const manageClick = (action) => {
    if (action === "allRight") {
      setRight((prevRight) => [...prevRight, ...left]);
      setLeft([]);
      setChecked([]);
    } else if (action === "right") {
      const movingItems = left.filter((item) => checked.includes(item.id));
      setRight((prevRight) => [...prevRight, ...movingItems]);
      setLeft(left.filter((item) => !checked.includes(item.id)));
      setChecked([]);
    } else if (action === "left") {
      const movingItems = right.filter((item) => checked.includes(item.id));
      setLeft((prevLeft) => [...prevLeft, ...movingItems]);
      setRight(right.filter((item) => !checked.includes(item.id)));
      setChecked([]);
    } else if (action === "allLeft") {
      setLeft((prevLeft) => [...prevLeft, ...right]);
      setRight([]);
      setChecked([]);
    }
  };

  const renderList = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={checked.includes(item.id)}
            onChange={() => handleCheck(item.id)}
            id={item.id}
          />
          <label htmlFor={item.id}>{item.name}</label>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="transfer-list">
      <div className="list-container">
        <div className="list">{renderList(left)}</div>
      </div>
      <div className="btn-container">
        <button onClick={() => manageClick("allRight")}>&gt;&gt;</button>
        <button onClick={() => manageClick("right")}>&gt;</button>
        <button onClick={() => manageClick("left")}>&lt;</button>
        <button onClick={() => manageClick("allLeft")}>&lt;&lt;</button>
      </div>
      <div className="list-container">
        <div className="list">{renderList(right)}</div>
      </div>
    </div>
  );
};

export default App;
