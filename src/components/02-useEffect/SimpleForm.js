import React, { useEffect, useState } from 'react';
import Message from './Message';


import './effectStyles.css';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect( () => {
    // console.log('hey!');
  }, []);

  useEffect( () => {
    // console.log('cambio el formstate');
  }, [formState]);

  useEffect( () => {
    // console.log('cambio el email');
  }, [email]);

  const handleInpuntChange = ({target}) => {
    setFormState({
      ...formState,
      [ target.name ] : target.value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInpuntChange }
        />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="example@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInpuntChange }
        />
      </div>
      
      {
        (name === '123') && <Message/>
      }

    </>
  )
}

export default SimpleForm;
