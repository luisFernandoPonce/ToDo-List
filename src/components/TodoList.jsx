import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([])

  const agregarTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    
  const nuevoTodo = [todo, ...todos]

  setTodos(nuevoTodo)
  console.log(todo, ...todos) // visualización en tiempo real
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>Que tareas tenemos para hoy?</h1>
      <TodoForm onSubmit={agregarTodo} />
      <Todo 
        todos = {todos}
        completeTodo = {completeTodo}
        removeTodo = {removeTodo}
      />
    </div>
  )
}

export default TodoList