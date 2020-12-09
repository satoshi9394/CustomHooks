import React from 'react'
import PropTypes from 'prop-types'

const ShowIncrement = React.memo(({ increment }) => {
  console.log('me volvi a generar :(')
  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increment( 5 )
      }}
    >
      Incrementar
    </button>
  )
})

ShowIncrement.propTypes = {
  increment: PropTypes.func
}

export default ShowIncrement
