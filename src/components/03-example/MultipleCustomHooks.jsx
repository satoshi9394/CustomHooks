import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';




import './effectStyles.css';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

  const { loading, data } = useFetch(url)
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>
        BreakingBad Quetes
      </h1>
      <hr/>
      {
        loading ? 
        (
          <div
            className="alert alert-info text-center"
          >
          loading...
          </div>
        ) :
        (
          <blockquote
            className="blockquote text-right"
          >
            <p
              className="mb-0"
            >
              {quote}
            </p>
            <footer
              className="blockquote-footer"
            >
              {author}
            </footer>
          </blockquote>
        )
      }
      <button
        className="btn btn-primary"
        onClick={ () => {increment()} }
      >
        Siguiente capitulo
      </button>
    </div>
  )
}

export default MultipleCustomHooks
