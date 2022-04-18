import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const url = 'https://assets.breatheco.de/apis/fake/todos/user/jackbasso';
  const [todos, setTodos] = useState([])

  const getTodosList = () => { 
    fetch(url)
    .then(response => {
      if (response.status === 404) {
        setTodos([])
        return;
      } else {
        return response.json()
      }
    })
      .then(responseAsJson => {
        // Do stuff with the JSONified response
      if (!responseAsJson) {
        setTodos([])
      } else {
        setTodos(responseAsJson);
      }   
      })
      .catch(error => {
        console.log('Al parecer hay un problema: \n', error);
      });
  }


  useEffect(getTodosList, [])


  const postPutTodos = data => {
    const nuevoTodo = [data, ...todos]
    console.log(nuevoTodo.length)
    var metodo = ''
    if (todos.length === 0) {
      metodo = 'POST'
    } else {
      metodo = 'PUT'
    }
    fetch(url, {
    method: metodo, 
    body: JSON.stringify([data, ...todos]), // data can be a `string` or  an {object} which comes from somewhere further above in our application
    headers:{
      'Content-Type': 'application/json'
      } 
    })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(response => {
      getTodosList()
      console.log('Success:', response)})
    .catch(error => console.error(error));
    
  };
  

  const deleteTodosList = () => {
    fetch(url, {
      method: 'DELETE'
      })
    .then(response => {
      response.json()
      setTodos([]);
      })
        .then(responseAsJson => {
        
         })
        .catch(error => {
          console.log('Looks like there was a problem: \n', error);
        });
        getTodosList();
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
      <h1>Jack's ToDo - API Fetch</h1>
      <div className='main-box'>
        <TodoForm onSubmit={postPutTodos} />
        {todos.map((todo, index) => (
        <Todo 
          todo = {todo}
          key = {index}
          todos = {todos}
          completeTodo = {completeTodo}
        />
        ))
        }
        <div className='footer'>
          {todos.length} {!todos.length ? 'tarea pendiente' : 'tareas pendiente'}
        </div>
      </div>
      <button onClick={deleteTodosList}>Limpiar listado</button>
    </div>
  )
}

export default TodoList