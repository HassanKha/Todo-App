import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [input, settextinput] = useState("");
  const [todotexts, settodoinput] = useState([]);
  const [state, setstate] = useState("all");
  const [filtertodo, setfiltertodo] = useState([]);
  useEffect(() => {
    locals();
  }, []);
  useEffect(() => {
    filter();
    local();
  }, [todotexts, state]);

  const filter = () => {
    switch (state) {
      case "completed":
        setfiltertodo(todotexts.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setfiltertodo(todotexts.filter((el) => el.completed === false));
        break;
      default:
        setfiltertodo(todotexts);
        break;
    }
  };
  const local = () => {
    localStorage.setItem("todos", JSON.stringify(todotexts));
  };
  const locals = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localstore = JSON.parse(localStorage.getItem("todos"));
      settodoinput(localstore);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>The Boss's Todo List</h1>
      </header>
      <Form
        settextinput={settextinput}
        input={input}
        todotext={todotexts}
        settodoinput={settodoinput}
        state={state}
        setstate={setstate}
      />
      <TodoList
        todos={todotexts}
        settodo={settodoinput}
        filtertodo={filtertodo}
      />
    </div>
  );
}

export default App;
