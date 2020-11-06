import React, { useEffect, useState } from 'react'

const Message = () => {

  const [coors, setCoors] = useState({ x: 0, y: 0 })

  const {x, y} = coors;

  useEffect(() => {

    const mousMove = (e) => {
      const coors = { x: e.x, y: e.y }
      setCoors(coors);
    }
    window.addEventListener('mousemove', mousMove);
    return () => {
      console.log('Componente desmontado!!')
      window.removeEventListener('mousemove', mousMove)
    }
  }, [])  
  return (
    <>
      <h3>Eres Genial!!!</h3>
      <p>
        X: {x}   Y:{y}
      </p>
    </>
  )
}

export default Message
