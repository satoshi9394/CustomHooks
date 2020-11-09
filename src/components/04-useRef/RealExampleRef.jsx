import React, { useState } from 'react'
import MultipleCustomHooks from '../03-example/MultipleCustomHooks';


import './effectStyles.css';

const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>
        RealExampleRef
      </h1>
      <hr/>
      {
        show && <MultipleCustomHooks/>
      }
      <button
        className="btn btn-success mt-1"
        onClick={ () => { setShow(!show) }}
      >
        Mostrar/Ocultar
      </button>
    </>
  )
}

export default RealExampleRef
