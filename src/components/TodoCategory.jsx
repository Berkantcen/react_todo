import React from 'react'
import { useContext } from 'react'
// COMPONENT
import TodoItem from './TodoItem'
// CONTEXT
import TodoContext from '../context/TodoContext'

const TodoCategory = ({ category }) => {
  const { todos } = useContext(TodoContext)
  return (
    <div className='todo-category-container'>
      <h4>{category}</h4>
      {todos.map((todo, idx) => {
        if (todo.category === category) {
          return <TodoItem todo={todo} key={idx} />
        } else {
          return null
        }
      })}
    </div>
  )
}

export default TodoCategory
