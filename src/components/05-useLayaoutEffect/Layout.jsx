import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';




import './layout.css';

const Layout = () => {

  const { counter, increment } = useCounter(1)
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

  const { data } = useFetch(url)
  const { quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({})

  const pTag = useRef()

  useLayoutEffect(() => {
    setBoxSize( pTag.current.getBoundingClientRect() )
  }, [quote])

  return (
    <div>
      <h1>
        LayoutEffect
      </h1>
      <hr/>
      <blockquote
        className="blockquote text-right"
      >
        <p
          className="mb-0"
          ref={ pTag }
        >
          {quote}
        </p>
      </blockquote>
      <pre>
        { JSON.stringify(boxSize, null , 3) }
      </pre>
      <button
        className="btn btn-primary"
        onClick={ () => {increment()} }
      >
        Siguiente capitulo
      </button>
    </div>
  )
}

export default Layout