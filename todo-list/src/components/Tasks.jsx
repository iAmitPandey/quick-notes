import React from "react";

const tasks = ({ submittedTask, editTask, deleteTask }) => {
  return (
    <div>
      {submittedTask?.map((task) => (
        <div key={task.id}>
          <div onDoubleClick={() => handleDoubleclick(task.id)}>
            {task.todoInput}
          </div>
          <button className="border-2" onClick={() => editTask(task)}>
            Edit
          </button>
          <button className="border-2" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default tasks;
