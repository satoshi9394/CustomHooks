import React, { useEffect, useReducer } from 'react'
import useForm from '../../hooks/useForm';

import './todoApp.css'
import { todoReducer } from './todoReducer';

const TodoApp = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    /*
    return [{
      id: new Date().getTime(),
      desc: 'Aprender React',
      done: false
    }]
    */
  }

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  const handleTodo = (e) => {
    e.preventDefault();
    if( description.trim().length <= 1 ) return
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
    const addAction = {
      type: 'add',
      payload: newTodo
    }
    dispatch( addAction );
    reset()
  }

  const [ { description }, hadleInputChange, reset ] = useForm({
    description: ''
  });

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  const handleDelete = ( todoId ) => {
    const deleteAction = {
      type: 'delete',
      payload: todoId
    };
    dispatch(deleteAction)
  }

  const handleToggle = ( todoId ) => {
    const toggleAction = {
      type: 'toggle',
      payload: todoId
    }
    dispatch(toggleAction)
  }

  return (
    <div>
      <h1>TodoApp ( { todos.length } )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map( (todo, i) => (
                <li 
                  key={ todo.id }
                  className="list-group-item"
                > 
                  <p 
                    className={ `${ todo.done && 'complete' }` }
                    onClick={ () => { handleToggle(todo.id) }}
                  >
                    { i + 1}.-{ todo.desc }
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick= { () => { handleDelete(todo.id)}}
                  >
                    borrar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
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
        </div>
      </div>

    </div>
  )
}

export default TodoApp
