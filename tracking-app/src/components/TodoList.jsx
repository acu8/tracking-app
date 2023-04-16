import React from 'react'

const TodoList = ({todos, setTodos}) => {
  return (
    <div>
         <ul className="todo-list">
            {todos.map((task) => (
                <div key={task.id} className='todo'>
                        <li className='todo-item'>{task.text}</li>
                        <button className='complete-btn'>
                            <i className='fas fa-check'></i>
                        </button>
                        <button className='trash-btn'>
                            <i className='fas fa-trash'></i>
                        </button>
                    </div>
            ))}
         </ul>
    </div>
  )
}

export default TodoList