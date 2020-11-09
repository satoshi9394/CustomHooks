import { useState } from 'react'

const useForm = (initialStatev = {}) => {

  const [ values, setValues ] = useState(initialStatev);

  const handleInpuntChange = ({target}) => {
    setValues({
      ...values,
      [ target.name ] : target.value
    });
  }

  return [ values, handleInpuntChange ]


}

export default useForm
