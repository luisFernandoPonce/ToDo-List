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
    <div className='todo-body'>
      <h1>Que tareas tenemos para hoy?</h1>
      <div className='main-box'>
        <TodoForm onSubmit={agregarTodo} />
        {todos.map((todo, index) => (
        <Todo 
          todo = {todo}
          index = {index}
          todos = {todos}
          completeTodo = {completeTodo}
          removeTodo = {removeTodo}
        />
        ))
        }
        <div className='footer'>
          {todos.length} {!todos.length ? 'tarea pendiente' : 'tareas pendiente'}
        </div>
      </div>
    </div>
  )
}

export default TodoList