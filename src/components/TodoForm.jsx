import React, { useState } from 'react'; // rfce

function TodoForm(props) {
  const [input, setInput] = useState('')

  const manejarCambio = e => {
    setInput(e.target.value);
  };
  
  const manejarSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
      });
    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={manejarSubmit}  >
      <input type="text" className='todo-input' placeholder='Agrega una tarea' value={input} name='text' onChange={manejarCambio} />
      
    </form>
  )
}

export default TodoForm