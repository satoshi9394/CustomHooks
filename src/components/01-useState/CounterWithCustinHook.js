import React from 'react';
import { useCounter } from '../../hooks/useCounter';


import './counter.css';

const CounterWithCustinHook = () => {

  const {state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook: { state }</h1>
      <hr/>

      <button 
        className="btn btn-primary"
        onClick={ () => increment(2) }
      >
        +1
      </button>
      <button 
        className="btn btn-warning"
        onClick={ () => decrement(3) }
      >
        -1
      </button>
      <button 
        className="btn btn-danger"
        onClick={ reset }
      >
        reset
      </button>

    </>
  )
}

export default CounterWithCustinHook
