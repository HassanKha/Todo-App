import React from "react";

function Form({
  settextinput,
  input,
  todotext,
  settodoinput,
  state,
  setstate,
}) {
  const gotohandletext = (e) => {
    settextinput(e.target.value);
  };
  const gotosubmithandle = (e) => {
    e.preventDefault();
    settodoinput([
      ...todotext,
      {
        text: input,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    settextinput("");
  };
  const statehandler = (e) => {
    setstate(e.target.value);
  };
  return (
    <form>
      <input
        value={input}
        onChange={gotohandletext}
        type="text"
        className="todo-input"
      />
      <button onClick={gotosubmithandle} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statehandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
