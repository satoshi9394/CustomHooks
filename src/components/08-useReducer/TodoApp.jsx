import React, { useReducer } from 'react'

import './todoApp.css'
import { todoReducer } from './todoReducer';

const TodoApp = () => {

  const initialState = {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }

  const [ todos ] = useReducer(todoReducer, initialState);

  console.table(todos);

  return (
    <div>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>mundo</li>
        <li>Hola de nuevo</li>
      </ul>

    </div>
  )
}

export default TodoApp
