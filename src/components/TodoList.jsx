import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const agregarTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  
  const nuevoTodo = [todo, ...todos]

  setTodos(nuevoTodo)
  console.log(...todos)
  };

  return (
    <div>
      <h1>Que tareas tenemos para hoy?</h1>
      <TodoForm onSubmit={agregarTodo} />
    </div>
  )
}

export default TodoList