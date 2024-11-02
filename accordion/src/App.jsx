import { useState } from "react";
import questions from "./data";
import Accordion from "./component/Accordion";

function App() {
  const [multiple, setMultiple] = useState(true);
  const [questionId, setQuestionId] = useState([]);

  function handleClick() {
    if (multiple) {
      questionId.map((curr) => {
        curr((prev) => !prev);
      });
      setQuestionId([]);
    }
    setMultiple(!multiple);
  }

  return (
    <>
      <h1>Accordion</h1>
      <div>
        <label htmlFor="checkbox">Is multiple open accordion allowed?</label>
        <input
          type="checkbox"
          name=""
          id="checkbox"
          checked={multiple}
          onChange={() => handleClick()}
        />
      </div>

      <div>
        {questions.map((question) => (
          <Accordion
            key={question.id}
            questionId={questionId}
            setQuestionId={setQuestionId}
            multiple={multiple}
            {...question}
          />
        ))}
      </div>
    </>
  );
}

export default App;
