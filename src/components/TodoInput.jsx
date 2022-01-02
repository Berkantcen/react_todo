import React from 'react'
import { useContext, useEffect } from 'react'
// CONTEXT
import TodoContext from '../context/TodoContext'

const TodoInput = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    todoText,
    setTodoText,
    todos,
    addTodo,
  } = useContext(TodoContext)

  return (
    <div className='form-container'>
      <form>
        <input
          onChange={(e) => {
            setTodoText(e.target.value)
          }}
          type='text'
          placeholder='Add a todo'
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            if (todoText.length > 0) {
              addTodo(todoText, selectedCategory)
            } else {
              alert('Please enter a todo')
            }
          }}
        >
          +
        </button>
      </form>
      <div className='category-selection'>
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value)
          }}
        >
          <option value='' disabled hidden>
            Select Category
          </option>
          <option value='Work'>Work</option>
          <option value='Home'>Home</option>
          <option value='School'>School</option>
        </select>
      </div>
    </div>
  )
}

export default TodoInput
