import React from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const TodoItem = ({ todo }) => {
  const { removeTodo, todos, setTodos } = useContext(TodoContext)
  return (
    <div className='todo-item-container'>
      <p className={todo.completed ? 'completed' : null}>{todo.text}</p>
      <div className='options'>
        <button
          onClick={() => {
            const newTodo = { ...todo, completed: !todo.completed }
            setTodos(
              todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
            )
          }}
        >
          <i className='fas fa-check'></i>
        </button>
        <button
          onClick={() => {
            removeTodo(todo.id)
          }}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
