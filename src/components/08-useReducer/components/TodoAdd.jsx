import React from 'react'
import useForm from '../../../hooks/useForm';


const TodoAdd = ({ handleAddTodo }) => {
  
  const [ { description }, hadleInputChange, reset ] = useForm({
    description: ''
  });

  const handleTodo = (e) => {
    e.preventDefault();
    if( description.trim().length <= 1 ) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    handleAddTodo(newTodo);
    reset()
  }

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr/>
      <form onSubmit={ handleTodo }>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={ description }
          onChange={ hadleInputChange }
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  )
}

export default TodoAdd
