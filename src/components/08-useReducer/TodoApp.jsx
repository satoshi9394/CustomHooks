import React, { useReducer } from 'react'

import './todoApp.css'
import { todoReducer } from './todoReducer';

const TodoApp = () => {

  const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }];

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);
  console.group(['Estado de la app'])
  console.table(todos);
  console.groupEnd()

  const handleTodo = (e) => {
    e.preventDefault();
    console.group(['Nueva tarea'])
    const newTodo = {
      id: new Date().getTime(),
      desc: 'Nueva tarea',
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch( action );
    console.table(newTodo);
    console.groupEnd()
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
                  <p className='text-center'>{ i + 1}.-{ todo.desc } </p>
                  <button
                    className="btn btn-danger"
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
