import React, { useEffect, useReducer } from 'react'
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

import './todoApp.css'
import { todoReducer } from './todoReducer';

const TodoApp = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

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

  const handleAddTodo = ( newTodo ) => {
    const addAction = {
      type: 'add',
      payload: newTodo
    }
    dispatch( addAction );
  }

  return (
    <div>
      <h1>TodoApp ( { todos.length } )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        </div>
        <div className="col-5">
          <TodoAdd
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>

    </div>
  )
}

export default TodoApp
