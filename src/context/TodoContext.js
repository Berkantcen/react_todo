import { createContext, useState } from 'react'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [categories, setCategories] = useState(['Work', 'Home', 'School'])
  const [selectedCategory, setSelectedCategory] = useState('Work')
  const [todoText, setTodoText] = useState('')

  const addTodo = (text, category) => {
    const newTodo = {
      text,
      category,
      id: Date.now(),
      completed: false,
    }

    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        setTodos,
        removeTodo,
        categories,
        selectedCategory,
        setSelectedCategory,
        todoText,
        setTodoText,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
