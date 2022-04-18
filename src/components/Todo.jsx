import React, { useState } from 'react'
//import { RiCloseLine } from 'react-icons/ri'

function Todo({ todo, index, completeTodo }) {
  const [show, setShow] = useState(false)
  
  const iconVisibility = () => {
    setShow(true)
  }
  const iconInvisibility = () => {
    setShow(false)
  }

  return (
    <div className='todo-row' key={index} onMouseEnter={iconVisibility} onMouseLeave={iconInvisibility} >
      <div key={todo.input} onClick={() => completeTodo(todo.input)}  >
        {todo.label}
      </div>
      
      
    </div>
  )
 
}

export default Todo