import React, { useState } from 'react'


const Form = ({todos, setTodos}) => {
    const[inputText, setInputText] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: todos.length,
                text: inputText
            }
            
        ]);
        console.log(todos);
    }

    const handleChange = (e) => {

        setInputText(e.target.value);
        console.log(inputText);
        }

  return (
    <div className='title'>
        <header>
          <h1>Tracking App</h1>
        </header>
        <form onSubmit={handleInput}>
            <input onChange={handleChange} type="text" className='todo-input' />
            <button type='submit'>
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    </div>
   
  )
}

export default Form