import React, { useState } from "react";
import uuid from "react-uuid";

const Form = ({ todos, setTodos, state, setState }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuid(),
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const stateHandler = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="title">
      <header>
        <h1>Tracking App</h1>
      </header>
      <form>
        <input
          onChange={handleChange}
          type="text"
          className="todo-input"
          value={inputText}
        />
        <button type="submit" onClick={handleInput}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={stateHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
