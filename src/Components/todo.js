import React from "react";

const Todo = ({ text, settodo, todo, todos }) => {
  const Delete = () => {
    settodo(todos.filter((el) => el.id !== todo.id));
  };
  const Complete = () => {
    settodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={Complete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={Delete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
