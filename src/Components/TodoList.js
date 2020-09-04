import React from "react";
import Todo from "./todo";
function TodoList({ todos, settodo, filtertodo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtertodo.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            settodo={settodo}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
