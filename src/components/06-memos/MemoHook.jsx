import React, { useState, useMemo }from 'react'
import {useCounter} from '../../hooks/useCounter'
import procesoPesado from '../../helpers/procesoPesado'


import './memorize.css'


const MemoHook = () => {

  const { counter, increment }  = useCounter( 5000 );
  const [show, setShow] = useState(true)

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

  return (
    <div>
      <h1>MemoHook</h1>
      <h2>Counter: <small>{counter}</small> </h2>
      <hr/>
      <p> { memoProcesoPesado } </p>
      <button
        className="btn btn-primary"
        onClick={ () => {increment()} }
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={ () => {
          setShow(!show)
        }}
      >
        Show/Hide: { JSON.stringify(show) }
      </button>
    </div>
  )
}

export default MemoHook