const procesoPesado = (interaciones) => {
  for( let i = 0; i < interaciones; i ++ ){
    console.log('Ahi vamos....')
  }
  return `${ interaciones } iteraciones realizadas.`
}

export default procesoPesado;