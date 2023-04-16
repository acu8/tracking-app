import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState(["all"]);
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, state]);

  const filterHandler = () => {
    switch (state) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <Form
        todos={todos}
        setTodos={setTodos}
        state={state}
        setState={setState}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
