import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'

function Todo({ todo, index, completeTodo, removeTodo }) {
  const [show, setShow] = useState(false)
  
  const iconVisibility = () => {
    setShow(true)
  }
  const iconInvisibility = () => {
    setShow(false)
  }

  return (
    <div className='todo-row' key={index} onMouseEnter={iconVisibility} onMouseLeave={iconInvisibility} >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}  >
        {todo.text}
      </div>
      <div className={!show ? 'icon-hide' : 'icon' } >
        <RiCloseLine 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>
  )
 
}

export default Todo