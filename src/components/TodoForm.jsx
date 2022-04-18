import React, { useState } from 'react'; // rfce

function TodoForm(props) {
  const [input, setInput] = useState('')

  const manejarCambio = e => {
    setInput(e.target.value);
  };
  
  const manejarSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      label: input,
      done: false

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