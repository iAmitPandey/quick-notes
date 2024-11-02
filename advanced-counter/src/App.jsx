import React from "react";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [changeValue, setChangeValue] = useState(0);
  const [delay, setDelay] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(-1000);
  const [limit, setLimit] = useState(1000);

  const toggleIncrementDecrement = (e) => {
    if (e.target.value === "increment") {
      if (value + changeValue < limit) {
        setValue(value + changeValue);
      }
    } else if (e.target.value === "decrement") {
      if (value - changeValue > lowerLimit) {
        setValue(value - changeValue);
      }
    } else if (e.target.value === "asyncMinus") {
      setTimeout(() => {
        if (value - changeValue > lowerLimit) {
          setValue(value - changeValue);
        }
      }, delay * 1000);
    } else if (e.target.value === "asyncPlus") {
      setTimeout(() => {
        if (value + changeValue < limit) {
          setValue(value + changeValue);
        }
      }, delay * 1000);
    }
  };

  const toggleValueChange = (e) => {
    const newValue = Number(e.target.value);
    setChangeValue(newValue);
  };

  const toggleLowerLimit = (e) => {
    setLowerLimit(Number(e.target.value));
  };

  const toggleLimit = (e) => {
    setLimit(Number(e.target.value));
  };

  const toggleDelay = (e) => {
    if (e.target.value === "1") {
      setDelay(Number(e.target.value));
    } else if (e.target.value === "2") {
      setDelay(Number(e.target.value));
    } else if (e.target.value === "3") {
      setDelay(Number(e.target.value));
    }
  };

  const resetCounter = () => {
    setValue(0);
    setLowerLimit(-1000);
    setLimit(1000);
    setChangeValue(0);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <header>Advance Counter</header>
      <section>
        <div className="text-center">{value}</div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleIncrementDecrement}
            value="decrement"
            className="bg-gray-300 border-2 border-black w-10 mr-4"
          >
            -
          </button>
          <button
            onClick={toggleIncrementDecrement}
            value="increment"
            className="bg-gray-300 border-2 border-black w-10 ml-4"
          >
            +
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleIncrementDecrement}
            value="asyncMinus"
            className="bg-gray-300 border-2 border-black w-20 mr-2"
          >
            async -
          </button>
          <button
            onClick={toggleIncrementDecrement}
            value="asyncPlus"
            className="bg-gray-300 border-2 border-black w-20 ml-2"
          >
            async +
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <p className="mr-2">Delay</p>
          <button
            onClick={toggleDelay}
            value="1"
            className="bg-gray-300 border-2 border-black w-5 mr-2"
          >
            1
          </button>
          <button
            onClick={toggleDelay}
            value="2"
            className="bg-gray-300 border-2 border-black w-5 mr-2"
          >
            2
          </button>
          <button
            onClick={toggleDelay}
            value="3"
            className="bg-gray-300 border-2 border-black w-5 mr-2"
          >
            3
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <p className="mr-2">Increment / Decrement By</p>
          <input
            onChange={toggleValueChange}
            className="border-2 border-black"
            type="number"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <p className="mr-2">LowerLimit Limit</p>
          <input
            className="w-20 border-2 border-black"
            value={lowerLimit}
            onChange={toggleLowerLimit}
            type="number"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <p className="mr-2">Limit Limit</p>
          <input
            className="w-20 border-2 border-black"
            value={limit}
            onChange={toggleLimit}
            type="number"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={resetCounter}
            className="bg-gray-300 w-20 border-2 border-black"
            type="reset"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
