import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const [submittedTask, setSubmittedTask] = useState([]);

  const submitTask = (e) => {
    e.preventDefault();
    if (editTodo) {
      updateTodo();
    } else {
      addInTodo();
    }
    setTodoInput("");
  };

  const updateTodo = () => {
    setSubmittedTask((prevItems) =>
      prevItems.map((item) =>
        item.id === editTodo.id ? { ...item, todoInput: todoInput } : item
      )
    );
    setEditTodo(null);
  };

  const addInTodo = () => {
    setSubmittedTask([
      ...submittedTask,
      { todoInput, id: new Date().getTime(), isDone: false },
    ]);
  };

  const cancelTask = () => {
    setTodoInput("");
    setEditTodo(null);
  };

  const editTask = ({ id, todoInput }) => {
    setTodoInput(todoInput);
    setEditTodo({ id, todoInput });
  };

  const deleteTask = (id) => {
    if (editTodo?.id === id) {
      setTodoInput("");
      setEditTodo(null);
    }
    setSubmittedTask((prevItems) =>
      prevItems.filter((item) => item?.id !== id)
    );
  };

  return (
    <>
      <div className="w-full">
        <form onSubmit={submitTask}>
          <input
            type="text"
            className="border-2 w-1/4 p-auto"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </form>
        <button
          type="submit"
          className="border-2"
          onClick={submitTask}
          disabled={!todoInput.trim()}
        >
          {editTodo ? "Edit" : "Submit"}
        </button>
        <button
          type="button"
          className="border-2"
          onClick={cancelTask}
          disabled={!todoInput.trim() && !editTodo}
        >
          Cancel
        </button>
      </div>

      <Tasks
        submittedTask={submittedTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
