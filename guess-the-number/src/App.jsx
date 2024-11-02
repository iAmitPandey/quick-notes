import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [secretNum, setSecretNum] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const num = Math.floor(Math.random() * 100 + 1);
    setSecretNum(num);
  }, []);

  function handleInput(e) {
    setInput(Number(e.target.value));
  }

  function resetIt() {
    setInput(0);
    setSecretNum(Math.floor(Math.random() * 100 + 1));
    setFeedback("");
  }

  function checkGuess() {
    if (input === secretNum) {
      setFeedback("Correct! You guessed the number!");
    } else if (input < secretNum) {
      setFeedback("Too low! Try a higher number.");
    } else {
      setFeedback("Too high! Try a lower number.");
    }
  }

  return (
    <>
      <p>Guess a number between 0 and 100</p>
      <input type="number" value={input} onChange={handleInput} />
      <button onClick={resetIt}>Reset</button>
      <button onClick={checkGuess}>Check</button>
      {feedback && <p>{feedback}</p>}
    </>
  );
}

export default App;
