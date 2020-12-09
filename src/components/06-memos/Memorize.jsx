import React, { useState }from 'react'
import {useCounter} from '../../hooks/useCounter'
import Smail from './Smail';

import './memorize.css'


const Memorize = () => {

  const { counter, increment }  = useCounter( 10 );
  const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Memorize</h1>
      <h2>Counter: <Smail value={counter} /> </h2>
      <hr/>
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

export default Memorize
