import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({todo, i, handleDelete, handleToggle }) => {
  return (
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
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TodoListItem
